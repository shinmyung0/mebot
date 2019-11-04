import { extendObservable, action } from "mobx";

import uuid from "uuid";

const sessionId = uuid.v4();
const defaultMessage =
  "Welcome to my website! Please check out the links below, or ask me something!";
const fallBackMessage =
  "Oops something went wrong...I seem to be experiencing technical issues :(";
const huhMessage = "huh?";
const loadingMessage = "...";
const askApi = process.env.REACT_APP_ASK_API;

class AppStore {
  constructor() {
    extendObservable(this, {
      currentMessage: defaultMessage,
      customRes: null,
      inputMode: "links",
      sayToBot: action(msg => {
        console.log("Guest said : " + msg);
        this.currentMessage = loadingMessage;
        this.customRes = null;
        this.sendGuestMessageToBot(msg);
      })
    });
  }

  sendGuestMessageToBot(msg) {
    this.currentMessage = loadingMessage;
    if (msg !== "") {
      fetch(`${askApi}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sessionId: sessionId,
          message: msg
        })
      })
        .then(response => {
          if (!response.ok) {
            this.currentMessage = fallBackMessage;
            throw Error("Bot API returned an error.");
          }

          return response.json();
        })
        .then(response => {
          if (response.type === "text") {
            this.currentMessage = response.value;
          } else {
            throw Error(`Bot API returned unsupported type=${response.type}`);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      this.currentMessage = huhMessage;
    }
  }
}

const store = new AppStore();

export default store;
