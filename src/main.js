import { createRandomNickname } from "./vendors/randomNicknameGenerator";
import { scaledrone } from "./modules/scaledrone";

fetch(url)
    .then((response) => response.json())
    .then((content) => {
      setScaledrone(content.keyID);
    })
    .catch((error) => console.error(error));

function setScaledrone(key) {

const drone = new Scaledrone(key, {
  data: createRandomNickname(),
});

const allocatedUsername = drone.args[1].data;

const room = drone.subscribe("observable-Algebra");

drone.on("open", (error) => {
  if (error) {
    return console.error(error);
  } else {
    console.log("Successfully connected to Scaledrone!");
  }
});

room.on("open", (error) => {
  if (error) {
    return console.error(error);
  } else {
    console.log("Connected to a room");
  }
});

scaledrone.onMessages.sendMessages(drone);

scaledrone.onMessages.receiveMessages(room, allocatedUsername);

scaledrone.onMembers.trackMembers(room, allocatedUsername);

scaledrone.onError.errorHandling(drone);

}
