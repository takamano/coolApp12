import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstcdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const bucket = new Bucket(this, 'Sample',{
      lifecycleRules: [
        {
          expiration:cdk.Duration.days(3)
        }
      ]
    })

    new cdk.CfnOutput(this, "SampleBucketName", {
      value: bucket.bucketName
    })
  }
}
