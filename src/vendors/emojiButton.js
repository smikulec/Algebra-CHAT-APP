import { EmojiButton } from "@joeattardi/emoji-button";

export default () => {
  const emojiButton = document.querySelector(".js-emoji-button");
  const picker = new EmojiButton({
    position: "top-start",
  });
  picker.on("emoji", (selection) => {
    document.querySelector(".js-message-input").value += selection.emoji;
  });
  emojiButton.addEventListener("click", () => picker.togglePicker(emojiButton));
};
