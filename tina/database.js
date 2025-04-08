// You have to add gitbeaker module ``yarn add @gitbeaker/node``

import { createDatabase, TinaLevelClient } from "@tinacms/datalayer";
import { MongodbLevel } from "mongodb-level";
import { Gitlab } from "@gitbeaker/node";
import { Base64 } from "js-base64";
import path from "path";
import fs from "fs";

// `isLocal` determines if the database is running in "Local Mode" or "Production Mode". You can set this value in your .env file or use a different method for determining the value. In this example we are using an environment variable.

// When in "Local Mode" a local levelDB server is used and data is saved to the file system
// When in "Production Mode" Your provided LevelDB implementation is used (MongoDB Level in this example) and data is written to the Git repository with "onPut" and "onDelete" callback functions
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true'

if (isLocal) console.log('Running TinaCMS in local mode.')
else console.log('Running TinaCMS in production mode.')

const host = process.env.GITLAB_HOST
const projectId = process.env.GITLAB_PROJECT_ID
const token = process.env.GITLAB_PERSONAL_ACCESS_TOKEN
const branch = process.env.GITLAB_BRANCH

const gitbeaker = new Gitlab({
  token: token,
  host: host
});

const localLevelStore = new TinaLevelClient()
const mongodbLevelStore = new MongodbLevel({
  collectionName: 'tinacms',
  dbName: 'tinacms',
  mongoUri: process.env.MONGODB_URI,
})
if (isLocal) {
  localLevelStore.openConnection()
}

// When the data is updated this function is called
const gitlabOnPut = async (key, value) => {

  let fileExists = false;
  try {
    await gitbeaker.RepositoryFiles.show(projectId, key, branch);
    fileExists = true;
  } catch(e) {}

  const { data } = await gitbeaker.Commits.create(
    projectId,
    branch,
    'Tina CMS Commit',
    [{
      filePath: key,
      action: fileExists ? 'update' : 'create',
      content: Base64.encode(value),
      encoding: 'base64'
    }]
  )

}
const localOnPut = async (key, value) => {
  const currentPath = path.join(process.cwd(), key);
  fs.writeFileSync(currentPath, value);
}

// When the data is deelted this function is called
const gitlabOnDelete = async (key) => {

  let fileExists = false;
  try {
    await gitbeaker.RepositoryFiles.show(projectId, key, branch);
    fileExists = true;
  } catch(e) {}

  if (fileExists){
    const { data } = await gitbeaker.Commits.create(
      projectId,
      branch,
      'Tina CMS Commit',
      [{
        filePath: key,
        action: 'delete',
      }]
    )
  }
}
const localOnDelete = async (key, value) => {
  const currentPath = path.join(process.cwd(), key);
  fs.rmSync(currentPath);
}

export default createDatabase({
  // @ts-ignore
  level: isLocal ? localLevelStore : mongodbLevelStore,
  onPut: isLocal ? localOnPut : gitlabOnPut,
  // @ts-ignore
  onDelete: isLocal ? localOnDelete : gitlabOnDelete,
})