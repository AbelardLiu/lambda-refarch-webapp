// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4ckluceqpu4qq9f3un34l9j8s1",     // CognitoClientID
  "api_base_url": "https://pyksvivzz5.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lllwebapp.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1cwv92r4hpbx4.amplifyapp.com"                                      // AmplifyURL
};

export default config;
