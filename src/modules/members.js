import actionEnums from "../enums/actionEnums";
import errorEnums from "../enums/errorEnums";

var membersList = [];

function membersListed(members, username) {
  members.forEach((member) => createMembersList(member, actionEnums.ADD));
  showMembersList(username);
}

function memberUpdate(member, username, action) {
  createMembersList(member, action);
  showMembersList(username);
  showNotifications(member, action);
}

function createMembersList(member, action) {
  if (action === errorEnums.RECONNECT && member === "null") {
    membersList = [];
  } else if (action === actionEnums.ADD) {
    membersList.push(member);
  } else if (action === actionEnums.REMOVE) {
    let index = membersList.indexOf(member);

    membersList.splice(index, 1);
  }

  return membersList;
}

function showMembersList(username) {
  const membersListElement = document.querySelector(".js-members-list");
  const numberOfMembers = document.querySelector(".js-members-title");

  membersListElement.innerHTML = "";
  numberOfMembers.innerText = `Active users (${membersList.length})`;

  for (let i = 0; i < membersList.length; i++) {
    const listItem = document.createElement("li");
    if (membersList[i].id === username) {
      listItem.innerText = `${membersList[i].clientData} (you)`;
      listItem.style.fontWeight = "bold";
    } else {
      listItem.innerText = membersList[i].clientData;
    }
    membersListElement.appendChild(listItem);
  }
}

function showNotifications(member, status) {
  const notificationList = document.querySelector(".js-notification-list");
  const notificationItem = document.createElement("li");
  notificationList.appendChild(notificationItem);

  if (status === actionEnums.ADD) {
    notificationItem.innerText = `${member.clientData} joined the room`;
  }
  if (status === actionEnums.REMOVE) {
    notificationItem.innerText = `${member.clientData} left the room`;
  }
}

export { createMembersList, membersListed, memberUpdate };
