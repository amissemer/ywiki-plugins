* Install [Serverless](https://serverless.com/framework/docs/getting-started/)

* Make sure you have your AWS credentials set up

The official lamda is deployed in the AWS CoE account, in the `eu-central-1` region, with the `ywiki-plugins-deployer` technical user. You'll need the access and secret key to overwrite this lambda. Alternatively, if you deploy a new lambda in a different account/region, you can update the endpoint `XSLT_ENDPOINT_URL` with the new `transform `function endpoint.

* Deploy

```
serverless deploy -v
```
