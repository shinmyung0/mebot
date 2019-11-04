const dialogflow = require("dialogflow");

const sessionClient = new dialogflow.SessionsClient();

async function sayToBot(message, sessionId) {
  const projectId = await sessionClient.getProjectId();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: "en-US"
      }
    }
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  let botResponse = {
    type: "text",
    value: result.fulfillmentText
  };
  return botResponse;
}

exports.sayToBot = sayToBot;
