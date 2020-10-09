const fs = require('fs');

const GRAPHQL_DATA_JSON = './.graphql-data.json';

if (!fs.existsSync(GRAPHQL_DATA_JSON)) {
    const GRAPHQL_DATA_TEMPLATE = {
        "operationName":null,
        "variables":{},
        "query": "{ hello nodeVersion }"
    }

    let lambdaDataJson = JSON.stringify(GRAPHQL_DATA_TEMPLATE, null, 2);
    
    fs.writeFileSync(GRAPHQL_DATA_JSON, lambdaDataJson);
}

const eventData = require(GRAPHQL_DATA_JSON);

const lambdaEvent = {
    body: JSON.stringify(eventData),
    httpMethod: 'POST',
    headers: {
        'content-type': 'application/json'
    }
}

let lambdaDataJson = JSON.stringify(lambdaEvent, null, 2);

fs.writeFileSync('.lambda-event-data.json', lambdaDataJson);
