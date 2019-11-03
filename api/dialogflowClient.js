const dialogflow = require("dialogflow");

const sessionClient = new dialogflow.SessionsClient();
// A unique identifier for the given session

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function sayToBot(message, sessionId) {
  const projectId = await sessionClient.getProjectId();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: message,
        // The language used by the client (en-US)
        languageCode: "en-US"
      }
    }
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  let botResponse = {
    type: "text",
    value: result.fulfillmentText
  };
  return botResponse;
}

exports.sayToBot = sayToBot;
