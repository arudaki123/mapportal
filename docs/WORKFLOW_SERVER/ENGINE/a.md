---
sidebar_position: 6
---

# VBD WF Engine JS API

**Engine JS API** trong **VBD Workflow Engine** dùng để control toàn bộ workflow 

## Function
- engine.log(...args),engine.error(...args) : ghi giá trị vào db
    ```js title= "engine"
        const object = {
            data : 'test',
        }
        //data sẽ được log vao quest db
        engine.log(object);
        engine.error('error');  
    ```       
- engine.fetch(url,options) : rest api  
    ```js title= "engine"
        const requestOptions = {
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
			}
		};
        engine.fetch('https://www.amiiboapi.com/api/amiibo/?name=mario',requestOptions)
        .then(result => {
            engine.log(result); 
        }).
        catch(error => {
            engine.error('fetch error'); 
        }); 
    ```   
engine.fetch post : rest api
    ```js title = "engine"
    let jsbody = {
        "productid" : "2fee2e3f-fe87-4429-8531-b58bc2660f0a",
        "user_name": "guest",
        "password" : "guest",
        "hold_login" : true
    }; 
    const requestOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
                    body : JSON.stringify(jsbody )
        };
        engine.fetch('http://10.222.3.84:18081/token/v1/login',requestOptions)
        .then(result => {
            console.log(JSON.stringify(result)); 
        }).
        catch(error => {
            engine.error('fetch error'); 
        }); 
    ```
- engine.getInput(options), engine.getOutput() : trả về kết quả của activity trong process 
    ```js title= "engine"
        const options = {
            processid : 'ProcessId', //process id của activity
            activityid : 'ActivityId' // activity id
        }
        const activityInput = engine.getInput(options); 
        const activityOutput = engine.getOutput(options); 
        console.log(activityInput); 
        console.log(activityOutput); 
    ```   
- Những function khác
    ```js title= "engine"
    engine.getInputCollection({
        processid : "processid",
        activityid : "activityid",
        instance_activity : "activity_instance"
    }) //get collections của activity trong workflow
    engine.getProcess(pid) //get process
    engine.getActivity(id); //get activity
    ```