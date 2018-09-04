* Install [Serverless](https://serverless.com/framework/docs/getting-started/)

* Make sure you have your AWS credentials set up

The official lamda is deployed in the AWS CoE account, in the `eu-central-1` region, with the `ywiki-plugins-deployer` technical user. You'll need the access and secret key to overwrite this lambda. Alternatively, if you deploy a new lambda in a different account/region, you can update the endpoint `XSLT_ENDPOINT_URL` with the new `transform `function endpoint.

* Deploy

```
serverless deploy -v
```

* Why Python rather than Node.JS to perform the XSL-Transformation?

I've looked into good implementation of XSLT in npm packages, but it seems there is no good, complete and reliable library to do this kind of transformation, and the few that claim to do it have a huge number of dependencies which do not seem all necessary.

In comparison, Python has a single mature and stable library, lxml, and it is easy enough to use, so that the amount of Python code implementing this lambda is actually very small and straightforward.

