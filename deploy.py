import os
import boto3
from botocore.config import Config

os.environ["AWS_PROFILE"] = "will"
s3 = boto3.resource('s3')

FILENAMES = [
    'charts/grafton_new_hampshire_cases.svg',
    'charts/grafton_new_hampshire_cases_adjusted.svg',
    'charts/grafton_new_hampshire_deaths.svg',
    'charts/grafton_new_hampshire_deaths_adjusted.svg',
    'charts/orange_vermont_cases.svg',
    'charts/orange_vermont_cases_adjusted.svg',
    'charts/orange_vermont_deaths.svg',
    'charts/orange_vermont_deaths_adjusted.svg',
    'charts/sullivan_new_hampshire_cases.svg',
    'charts/sullivan_new_hampshire_cases_adjusted.svg',
    'charts/sullivan_new_hampshire_deaths.svg',
    'charts/sullivan_new_hampshire_deaths_adjusted.svg',
    'charts/windsor_vermont_cases.svg',
    'charts/windsor_vermont_cases_adjusted.svg',
    'charts/windsor_vermont_deaths.svg',
    'charts/windsor_vermont_deaths_adjusted.svg',
]

[s3.Bucket('uppervalleycovid.org').upload_file(filename, filename) for filename in FILENAMES]
