// import {ApiAiClient} from 'api-ai-javascript';
import * as ApiAi from '../utils/api-ai';

// TODO: sanitized this
const ACCESS_TOKEN = 'f2fce62f9d5c47159bd1c5eed9eb5355';

const client = new ApiAi.ApiAiClient({ accessToken: ACCESS_TOKEN });

export default client;