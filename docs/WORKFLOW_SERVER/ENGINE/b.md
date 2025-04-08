---
sidebar_position: 6
---

# Activity JS API
Các công việc cần thực hiện sẽ được viết trong **activity**
# Classes 
```json title="Activity class"
{
	"id": "StartEvent_1",
	"name": "start",
	"process": {
		"id": "Process_1"
	},
	"instance_activity": {
		"isClone": false,
		"activity_instance_index": 0,
		"main_activity": null
	},
	"outin": {
		"incomming": [],
		"outgoing": [
			"Event_0ic0ylu"
		]
	},
	"instance": {
		"id": "64c3b7a4-6a70-4bf7-8c54-82e20e756c97"
	},
	"collection": null
}
```
# Function 
```js title="Function"
activity.getInput() //Return input
activity.getOutput()  //Return output
activity.getInputCollection() //Return collection
activity.setInput(args) //Set input
activity.setOutput(args) //Set output
activity.getProcess() //Return current process
```
