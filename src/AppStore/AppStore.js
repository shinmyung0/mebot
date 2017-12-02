import {extendObservable, action} from 'mobx';
import client from './BotClient';


const defaultMessage = 'Welcome to my website! Please check out the links below, or ask me something!';
const loadingMessage = '...';

class AppStore {
    
    constructor() {
        extendObservable(this, {
            currentMessage: defaultMessage,
            isInputMode: false,
            sayToBot: action((msg) => {
                console.log('Guest said : ' + msg);
                this.currentMessage = loadingMessage;
                client.textRequest(msg)
                        .then((res) => {
                            this.currentMessage = res.result.fulfillment.speech || 'Come again?';
                        })
                        .catch((err) => {
                            this.currentMessage = 'Oops something went wrong...I seem to be experienceing technical issues :(';

                        });
            })
        });
    }

}


const store = new AppStore();

export default store;