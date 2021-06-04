import { sendMessage } from "./messages";

const emojiButton = document.querySelector(".js-emoji-button");
const inputElement = document.querySelector(".js-message-input");
const buttonElement = document.querySelector(".js-send-button");
const inputContainer = document.querySelector(".js-input-emoji-box");

emojiButton.addEventListener("click", (event) =>
  import(
    /*webpackChunkName: "module-emojiButton" */ "../vendors/emojiButton"
  ).then((module) => {
    module.default();
  })
);

function handleEvents(event, drone) {
  event.preventDefault();
  sendMessage(drone);
  handleHeight("height: 35px");
}

function handleHeight(elementHeight) {
  inputElement.style.cssText = elementHeight;
  inputContainer.style.cssText = elementHeight;
}

function textareaAutoexpand() {
  let height = Math.min(35 * 3, inputElement.scrollHeight);
  inputElement.style.cssText = "height:" + height + "px";
  if (height === 105) {
    inputContainer.style.cssText = "height:" + (height + 5) + "px";
  } else {
    inputContainer.style.cssText = "height:" + height + "px";
  }
}

function listenToSendMessageEvents(drone) {
  inputElement.addEventListener("input", textareaAutoexpand);

  inputElement.addEventListener("keydown", (event) => {
    const keyCode = event.which || event.keyCode;

    if ((keyCode === 13 || event.key === "Enter") && !event.shiftKey) {
      handleEvents(event, drone);
    }
  });

  buttonElement.addEventListener("click", (event) => {
    handleEvents(event, drone);
  });
}

export { listenToSendMessageEvents };
