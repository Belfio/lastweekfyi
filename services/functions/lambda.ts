import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "@serverless-stack/node/table";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

// Call DynamoDB to add the item to the table

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log("Event", event);
  const tableName = Table.Counter.tableName;

  const params = {
    TableName: tableName,
    Item: {
      counter: { S: "paolo" },
      counter2: { S: "paolo" },
    },
  };
  const command = new PutItemCommand(params);
  const response = await client.send(command);

  console.log("Stiamo loggando?", response);

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, World! Your annoying request was received at ${event.requestContext.time}.`,
  };
};
