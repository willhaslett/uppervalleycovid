import os
import boto3
from botocore.config import Config

os.environ["AWS_PROFILE"] = "will"
s3 = boto3.resource('s3')
filenames = [
    'index.html',
    'index.css',
    'counties.svg',
    'orange_vermont.svg',
    'windsor_vermont.svg',
    'grafton_new_hampshire.svg',
    'sullivan_new_hampshire.svg',
]
for filename in filenames:
    s3.Bucket('uppervalleycovid.org').put_object(
        Key=filename,
        Body=open(filename, 'rb'),
        ContentDisposition='inline'
        )
