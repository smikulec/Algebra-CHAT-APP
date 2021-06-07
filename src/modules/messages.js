const messagesTemplate = require("../templates/handlebars/messagesTemplate.handlebars");

const divChatElement = document.querySelector(".js-chat-box");
const inputElement = document.querySelector(".js-message-input");

function sendMessage(drone, username) {
  const messageText = inputElement.value;
  if (messageText !== "") {
    drone.publish({
      room: "observable-Algebra",
      message: {
        username: username,
        message: messageText,
      },
    });
  }
  inputElement.value = "";
}

function showMessage(message, username) {
  const divMessage = document.createElement("div");
  divChatElement.append(divMessage);

  const text = message.data;
  const member = message.member;

  let messageTime = new Date(message.timestamp * 1000).toLocaleTimeString(
    "en-GB",
    { hour: "2-digit", minute: "2-digit" }
  );

  divMessage.innerHTML = messagesTemplate({
    message: {
      username: member.clientData,
      text: text.message,
      time: messageTime,
    },
  });

  if (member.clientData === username) {
    divMessage.className = "message-own";
  } else {
    divMessage.className = "message-others";
  }
}

export { sendMessage, showMessage };
