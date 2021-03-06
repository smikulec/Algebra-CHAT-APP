import connectionClosedTemplate from "../templates/html/connectionClosedTemplate.html";
import disconnectTemplate from "../templates/html/disconnectTemplate.html";
import errorTemplate from "../templates/html/errorTemplate.html";
import reconnectTemplate from "../templates/html/reconnectTemplate.html";
import errorEnums from "../enums/errorEnums";

const popUpModal = document.createElement("div");
document.body.appendChild(popUpModal);
popUpModal.className = "modal";
const modalTemplate = require("../templates/handlebars/modalTemplate.handlebars");

function showErrorNotification(input) {
  
  if (input === errorEnums.RECONNECT) {
    setTimeout(() => {
      popUpModal.style.display = "none";
    }, 3000);
  } else {
    popUpModal.style.display = "block";
  }

  if (input === errorEnums.ERROR) {
    popUpModal.innerHTML = modalTemplate({ errorMessage: errorTemplate });
  } else if (input === errorEnums.CLOSE) {
    popUpModal.innerHTML = modalTemplate({
      errorMessage: connectionClosedTemplate,
    });
  } else if (input === errorEnums.DISCONNECT) {
    popUpModal.innerHTML = modalTemplate({
      errorMessage: disconnectTemplate,
    });
  } else if (input === errorEnums.RECONNECT) {
    popUpModal.innerHTML = modalTemplate({
      errorMessage: reconnectTemplate,
    });
  }

}

export { showErrorNotification };
