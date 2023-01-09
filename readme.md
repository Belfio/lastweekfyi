aws cognito-idp sign-up \
 --region us-east-1 \
 --client-id 3u7d3vnh4n60ucitn7qc8c9pv4 \
 --username a.belfiori@gmail.com\
 --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
 --region us-east-1 \
 --user-pool-id us-east-1_BwaUBxUKo \
 --username a.belfiori@gmail.com

npx aws-api-gateway-cli-test \
 --username='a.belfiori@gmail.com' \
 --password='Passw0rd!' \
 --user-pool-id us-east-1_BwaUBxUKo \
 --app-client-id='3u7d3vnh4n60ucitn7qc8c9pv4' \
 --cognito-region='us-east-1' \
 --identity-pool-id='us-east-1:79cdf1ec-a03b-481e-8f92-4e11ac226ac7' \
 --invoke-url='https://n02gvs4icd.execute-api.us-east-1.amazonaws.com' \
 --api-gateway-region='us-east-1' \
 --path-template='/private' \
 --method='GET'
