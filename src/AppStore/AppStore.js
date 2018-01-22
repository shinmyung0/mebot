import {extendObservable, action} from 'mobx';
import client from './BotClient';


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
                client.textRequest(msg)
                        .then((res) => {
                            let customRes = res.result.fulfillment.messages.find((e) => {
                                return e.type === 4;
                            });

                            if (customRes) {
                                this.customRes = customRes.payload;
                                this.currentMessage = loadingMessage;
                            } else {
                                this.currentMessage = res.result.fulfillment.speech || 'Come again?';
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            this.currentMessage = 'Oops something went wrong...I seem to be experienceing technical issues :(';

                        });
            })
        });
    }

}


const store = new AppStore();

export default store;