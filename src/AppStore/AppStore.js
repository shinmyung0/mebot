import { extendObservable, action } from 'mobx';
import sayToBot from './DialogFlowClient';


const defaultMessage = 'Welcome to my website! Please check out the links below, or ask me something!';
const loadingMessage = '...';

class AppStore {

    constructor() {
        extendObservable(this, {
            currentMessage: defaultMessage,
            customRes: null,
            inputMode: 'links',
            sayToBot: action((msg) => {
                console.log('Guest said : ' + msg);
                this.currentMessage = loadingMessage;
                this.customRes = null;
                this.sendGuestMessageToBot(msg)
            })
        });
    }

    sendGuestMessageToBot(msg) {

        const fallBackMessage = 'Oops something went wrong...I seem to be experiencing technical issues :(';

        sayToBot(msg)
            .then((res) => {
                if (res.responseType === "text") {
                    this.currentMessage = res.response;

                } else {
                    console.error("Response object was incorrectly formatted")
                    console.error(JSON.stringify(res))
                    this.currentMessage = fallBackMessage;
                }
            })
            .catch((err) => {
                console.error(err);
                this.currentMessage = fallBackMessage;
            })
    }

}


const store = new AppStore();

export default store;