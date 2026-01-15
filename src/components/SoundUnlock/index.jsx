import { useEffect } from "react";
import { unlockSound } from "../../services/sound";

export function SoundUnlock({ children }) {
  useEffect(() => {
    const unlock = () => unlockSound();

    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  return children;
}
