# API

## GET method with URL params steps
1. Create a lambda function that will make any CRUD in dynamoDB
2. Create the API resource and method
3. Update the lambda functio permissions
4. Open the postman and make a test

### LAMBDA
1. Click on "Create function"
2. Insert a name, ie: getUser and click on "Create Function"
3. Insert the below code inside the index.js file
```javascript
const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'})

exports.handler = function(event, context, callback) {

    var params = {
        TableName : "users",
        ProjectionExpression:"id, email",
        KeyConditionExpression: "#email = :email",
        FilterExpression: "#email = :email",
        ExpressionAttributeValues: {
            ":email": event.email
        }
    };

    client.scan(params, function(err, data){
        if(err){
            callback(err, null)
        }else{
            callback(null, data.Items)
        }
    })
};
```
4. Click on "Deploy" - on the right side of orange "Test" button

**IMPORTANT**
5. Click on the tab "Configuration", on the left side click on "Permissions"
5. Click on role inside "Execution role"
6. In the new browser tab (AWS IAM) click on "Add permissions" then "Attach policies"
7. On search field enter: "dynamo" and after the list finish to load, select "AmazonDynamoDBFullAccess" and click on "Attach policy"

### API - GET
1. Select "REST API" and click on "Build"
2. On "Create new API" select "New API"
3. Insert an API name and click on "Create API"
4. Select the root '/' path and then click on "Actions"
5. Click on create Resource and then insert a name: "users""
6. Select the resourse created, then click on "Actions" again and now click on "Create Method" and select "GET" and finally click on checkmark button to confirm the new method
7. Select the lambda function and click on "Save"
8. Click on "Actions" and then "Deploy API"

**Adding the url params**
1. Click on Method created, in this case "GET"
2. Click on "Method Request" and in "URL Query String Parameters" click on "Add query string"
3. Insert the url param, ie: email and on the right side click on checkmar button to confirm the insertion
4. Click on "Method Execution" at the top and then click on "Integration Request"
5. Scroll down untill "Mapping Templates" select the second option "When there are no templates defined (recommended)"
6. Insert the below code in the text area and click on "Save"
```json
#set($inputRoot = $input.path('$'))
{
"email": "$input.params('email')"
}
```
7. Click on "Add mapping template", insert "application/json" and click on checkmark button to confirm
8. Click on "Actions" and then "Deploy API"

### PostMan test
1. Create a new request
2. In the "headers" insert in the key field "Content-Type" and in the value field "application/json"
3. Make sure the method "GET" is selected and inser the endpoint, ie: "https://YOURENDPOINT.com/production/user?email=user@email.com
**change**
- YOURENDPOINT for your URL endpoint
- production for your API stage name (you can find in the API clicking on "Stages" on the right side)
- the url param, if you want get another one different from "email" after "?"
- change the field after "=" with you want to consult
