let audio = null
let unlocked = false

import audioLink from '../assets/sounds/livechat-129007.mp3'

export function unlockSound() {
  if (unlocked) return;

  audio = new Audio(audioLink);
  audio.volume = 1;

  unlocked = true;
}

export function playSound() {
  if (!audio || !unlocked) {
    return;
  }

  audio.currentTime = 0;
  audio.play().catch(err => {
    console.warn("Falha ao tocar som:", err);
  });
}
