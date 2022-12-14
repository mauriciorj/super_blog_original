# COGNITO

## Creating the user pools

1. Create a lambda function to add the new user to dynamoDb
2. Create a pool
3. Add the lambda

### Lambda

1. Create a new function
2. Add the following code and click, save (CTR + S) and click on "Deploy"
3. Click on "Configuration" tab, then click on "Permission" on the left side and finally click on the role - under "Role name"
4. Add the policies: "AmazonDynamoDBFullAccess", "AmazonCognitoDeveloperAuthenticatedIdentities" and "AmazonCognitoPowerUser"
5. Click on "Environment variables" on the left side menu
6. Click on "Edit"
7. Click on "Add enviroment variable"
8. Insert the following variables:
   **Key:** "TABLE_NAME" **Value:** "users"
   **Key:** "REGION" **Value:** "us-east-2"
9. Click on "Test" tab
10. Insert a "Name" and the code
11. Click on orange button "Test"

### Cognito

1. Click on "Manage User Pools" then click on "Create a user pool"
2. Insert a name and click on "Step throught settings""
3. On "How do you want your end users to sign in?" section, select "Email address or phone number" > "Allow email addresses" and then click on "Next step"
4. Change the password requirement if necessary and then click on "Next step" then on "Next step" again until "Which app clients will have access to this user pool?"
5. Click on "Add an app client"
6. On "App client name" insert a name, ie: website
7. **Uncheck "Generate client secret"** and click on "Set attribute read and write permissions". Then click on"Create app client" and then click on "Next step" until last view where you need click on "Create pool"
8. On left side, click on "Domain name"
9. Insert a name and if it's available click on "Save changes"

10. On Cognito User Pools, select the correct User Pool
11. Click on "Triggers" on the left side
12. On "Post confirmation" select the lambda rule
13. Click on "Save changes"



**LAMBDA CODE**

```javascript
var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
    let date = new Date();

    const tableName = process.env.TABLE_NAME;
    const region = process.env.REGION;

    aws.config.update({region: region});

    // If the required parameters are present, proceed
    if (event.request.userAttributes.sub) {
        // -- Write data to DDB
        let ddbParams = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                'email': {S: event.request.userAttributes.email},
                'createdAt': {S: date.toISOString()},
            },
            TableName: tableName
        };

        // Call DynamoDB
        try {
            await ddb.putItem(ddbParams).promise()
        } catch (err) {
        }

        context.done(null, event);

    } else {
        context.done(null, event);
    }
};
```

**TEST CODE**

```json
{
  "userName": "johnnysmmaith",
  "request": {
    "userAttributes": {
      "email": "exampleuser@example.com",
      "email_verified": true,
      "name": "Johnny Smith",
      "sub": "abcdevfefe-1232132-cofeve"
    }
  },
  "response": {}
}
```
