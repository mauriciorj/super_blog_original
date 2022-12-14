# Project One

## Summary
- [How to start](#how-to-start)
- [Architecture](#architecture)
- [AWS Services](#aws-services)
  - [Create a S3 bucket](#create-a-s3-bucket)
  - [Configuring the Pipeline](#configuring-the-pipeline)
    - [Codebuild](#codebuild)
    - [CodePipeline](#codePipeline)
  - [Configuring the Distribution](#configuring-the-distribution)
    - [Cloud Front](#cloud-front)
  - [Configuring the API](#configuring-the-api)
    - [Lambda Functions](#lambda-functions)
    - [API](#api)

## How to start

1. Create a project on GitHub
2. Clone the project
```shell
git clone https://github.com/mauriciorj/project_one.git
```
3. Install the packages
```shell
yarn install
```

## Architecture
- root
- src
  - app (main app)
    - assets
    - components
    - containers
    - postMan
    - styles
  - admin panel (admin area - not created yet)

## AWS Services

### IMPORTANT ###
Before create the pipeline flow the file "buildspec.yml" must be created in the app/ , otherwise the build will fail!
### Create a S3 bucket
1. Click on "Create bucket"
2. Insert the name, ie: "project-one-production"
3. Selection the "AWS Region"
4. Unselect the "Block all public access"
5. Click on acknowledge term that will open after uselect block control
6. Click on the bucket created
7. Click on tab "Properties", scroll down until "Static website hosting" and click on "Edit"
8. Insert the Index and Error Document as suugested (index.html and error.html) and click on "Save changes"
9. Click on tab "Permission" and insert the policy in "Bucket policy" - click on "Edit"
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicReadAccess",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::project-one-production/*"
        }
    ]
}
```


### Configuring the Pipeline
#### Codebuild
**Don't forget to check the region**
-> It's necessary create a project inside the codebuild before create a pipeline
1. Click on "Create build project""
2. Inser a name, ie: "project-one-codebuild-production"
3. Select "GitHub" as Source Provider and insert the "Repository URL"
4. Click on "Connect to GitHub" and follow the authorization steps
5. On "Environment" section, select "Ubuntu" as Operating system
6. For "Image" and "Image version" select always the newest version
7. Environment type select "Linux"
8. On "Artifacts" click on "Add artifact"
9. For "Type" select "Amazon S3"
10. Inser the name, ie: project_one_production
11. On "Logs" insert a "Group name", ie: project_one_production
12. Select "S3 logs - optional" and select the bucket
13. Click on "Create build project"

**Edit the Service Role Policy**
1. Select Build Project created
2. Click on "Edit" > "Environment"
3. Copy the "Service role", duplicate the browser tab and go to IAM
4. Click on "Policies" on the left side
5. Search for the policy name (without "arn:aws:iam::016534437021:role/service-role/"), and click on it
6. Click on the policy Base Policy (the name contains "BasePolicy")
7. Click on "Edit policy", then select "JSON" tab
8. Paste the code to right after first "Effect" group
9. Click on "Review" and the "Save changes"
```json
{
    "Effect": "Allow",
    "Action": [
        "s3:PutObject",
        "s3:GetObjectAcl",
        "s3:GetObject",
        "s3:DeleteObjectVersion",
        "s3:GetObjectVersionAcl",
        "s3:ListBucket",
        "s3:DeleteObject",
        "s3:PutObjectAcl",
        "s3:GetObjectVersion",
        "s3:ListObject*"
    ],
    "Resource": [
        "arn:aws:s3:::project-one-production/*",
        "arn:aws:s3:::project-one-production"
    ]
}
```

#### CodePipeline
**Don't forget to check the region**
**Don't forget to update the buildspec.yml file**
1. Create Pipeline
2. Enter the pipeline name, ie: "project-one-codepipeline-production" and click on "Next"
3. Select "GitHub (Version 2)" asSource Provider
4. Click on "Connect to Github" button
5. Enter a connection name, ie: "project_one" and click on "Connect to Githib"
6. Click on "Install a new app"
7. After being redirect to github page, select the repo and click on "Save"
8. After back to AWS page, click on "Connect"
9. Select the repo on "Repository name"
10. Select the "Branch name"
11. Click on "Next"
12. Select "AWS CodeBuild" as build provider
13. Select "Region" and "Project name"
14. Click on "Next"
15. Select "Amazon S3" to "Deploy provider"
16. Select Region
17. Select bucket created previously
18. Select "Extract file before deploy"
19. Click on "Next" and then "Create pipeline"

### Configuring the Distribution
#### Cloud Front
1. Click on "Create a CloudFront distribution""
2. Select the "Origin domain""
3. On "Viewer protocol policy" select "Redirect HTTP to HTTPS"
4. Click "Create distribution"

If you receive an 403 error - access forbidden:
// it's a temporary workaround :(
1. Select the distribution on Cloudfront
2. Click on "Error Pages" tab
3. Click on "Create custom error response"
4. Select "403: Forbidden"
5. Select "Yes" in "Customize error response"
6. Insert "/index.html" in "Response page path" (don't forget the "/")
7. Select "200: OK" in the "HTTP Response code" and click on "Create custom error response"
8. Repeat the steps 4, 5, 6 and 7 but now for "HTTP error code" -> "404: Not Found"

#### Configuring the API
1. Create Lambda Function
2. Create the API method
3. Create the DynamoDB table
3. Test on postman
4. Added to app
#### Lambda Functions
**Don't forget to check the region**
1. Click on "Create Function"
2. Keep selected "Author from scratch" or select "Use blueprint" and search for an existing function
3. Insert the function name, ie: "project_one_hello_world"
4. Select the prefered runtime and keep the "x86_64" "Architecture"
5. Click on "Create Function"

#### API
1. Click on "Build" in the "REST API" card -> don't select the "Private" one!
2. "Protocol": REST, "Create New Api": New Api and on "Settings" insert a name (ie: "project_one_api") and change the "Endpoint Type" to "Edge optimized"
3. Click on "Create API"
4. Click on "Actions" and insert a name, ie: "Hello World"
5. Click on "Create Resourse"
6. Click on "Actions" again and "Create Method"
7. Select "GET" and click on the check mark button
8. Keep the "Integration type" as "Lambda Function" and select the function created on "Lambda Function"
9. Click on "Save" and confirm clicking on "OK"
10. Click on "Actions" and then "Deploy API"
11. If it's the first time a "Deployment stage" must be created. Insert the "Stage name", ie: "production". Insert a "Stage description", ie: "Production API"

**To find the endpoint URL**
1. Click on "Stages" on the left side
2. Select the stage on the list, ie: "production"
3. The endpoint will be on the right side, right after "Invoke URL"

**To test using Postman**
1. Create a new "GET" method
2. Insert the URL + method (ie: hello-world): https://INVOKE-URL/hello-world

**POSTMAN**
1. Collection exported to: "src > postMan"

**To access the API end point from localhost**
1. Click on "Resources" on the left side
2. Select the resource, ie: "Hello World"
3. Click on "Actions" and the "Enable CORS"