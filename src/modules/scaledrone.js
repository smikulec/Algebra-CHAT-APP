import { showErrorNotification } from "./errorNotifications";
import {
  membersListed,
  memberUpdate,
  createMembersList,
} from "./members";
import { showMessage } from "./messages";
import { listenToSendMessageEvents } from "./handleInput";
import actionEnums from "../enums/actionEnums";
import errorEnums from "../enums/errorEnums";

function sendMessages(drone) {
  drone.on("open", () => listenToSendMessageEvents(drone));
}

function receiveMessages(room) {
  room.on("message", (message) => {
    showMessage(message, room.scaledrone.clientId);
  });
}

function trackMembers(room) {
  room.on("members", (members) => membersListed(members, room.scaledrone.clientId));

  room.on("member_join", (member) =>
    memberUpdate(member, room.scaledrone.clientId, actionEnums.ADD)
  );

  room.on("member_leave", (member) =>
    memberUpdate(member, room.scaledrone.clientId, actionEnums.REMOVE)
  );
}

function errorHandling(drone) {
  drone.on(errorEnums.ERROR, () => showErrorNotification(errorEnums.ERROR));

  drone.on(errorEnums.CLOSE, () => showErrorNotification(errorEnums.CLOSE));

  drone.on(errorEnums.DISCONNECT, () =>
    showErrorNotification(errorEnums.DISCONNECT)
  );

  drone.on(errorEnums.RECONNECT, () => {
    showErrorNotification(actionEnums.RECONNECT);

    createMembersList("null", actionEnums.RECONNECT);
  });
}

export const scaledrone = {
  onMessages: { sendMessages, receiveMessages },
  onMembers: { trackMembers },
  onError: { errorHandling },
};
