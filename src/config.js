const config = {
    s3: {
        REGION: "eu-west-2",
        BUCKET: "notes-app-upload-awesome"
    },
    apiGateway: {
        REGION:"us-east-1",
        URL:"https://u5n54hndm8.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_CW7BWZHwu",
        APP_CLIENT_ID: "313n7aiqupl8cicc4nibebbljm",
        IDENTITY_POOL_ID: "us-east-1:503621d1-d80b-4f77-9dcb-486bf1f20dd4",
    },
};

export default config;