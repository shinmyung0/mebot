import {extendObservable} from 'mobx';

const defaultMessage = 'Welcome to my website! Please check out the links below, or ask me something!';

class AppStore {
    
    constructor() {
        extendObservable(this, {
            currentMessage: defaultMessage
        });
    }

}


const store = new AppStore();

export default store;