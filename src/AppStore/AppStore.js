import {extendObservable, action} from 'mobx';

const defaultMessage = 'Welcome to my website! Please check out the links below, or ask me something!';

class AppStore {
    
    constructor() {
        extendObservable(this, {
            currentMessage: defaultMessage,
            isInputMode: false,
            sayToBot: action((msg) => {
                console.log('Guest said ' + msg);
                this.currentMessage = 'Huh? Did you say something?';
            })
        });
    }

}


const store = new AppStore();

export default store;