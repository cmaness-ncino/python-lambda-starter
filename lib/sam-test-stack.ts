import * as path from 'path';

import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class SamTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.PYTHON_3_7,
      handler: 'app.lambda_handler',
      code: lambda.Code.fromAsset
        (path.join(__dirname, '/my_functions'),
        {
          bundling: {
            image: lambda.Runtime.PYTHON_3_7.bundlingDockerImage,
            command: [
              'bash', '-c', `
              pip install -r requirements.txt -t /asset-output &&
              cp -au . /asset-output`,
            ],
          }
        }),
    });
  }
}
