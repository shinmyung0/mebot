
const dialogflow = require('dialogflow');
const uuid = require('uuid');

const sessionClient = new dialogflow.SessionsClient();
// A unique identifier for the given session
const sessionId = uuid.v4();


/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function sayToBot(message) {

    const projectId = await sessionClient.getProjectId()
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: message,
                // The language used by the client (en-US)
                languageCode: 'en-US',
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    let intent = null;
    if (result.intent) {
        intent = result.intent.displayName
    }

    let botResponse = {
        "responseType": "text",
        "detectedIntent": intent,
        "response": result.fulfillmentText
    };

    console.log(JSON.stringify(botResponse))

    return botResponse;
}

export default sayToBot