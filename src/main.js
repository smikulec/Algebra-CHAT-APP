import { createRandomNickname } from "./vendors/randomNicknameGenerator";
import { scaledrone } from "./modules/scaledrone";

const keyID = process.env.CHANNEL_ID;

const drone = new Scaledrone(keyID, {
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
