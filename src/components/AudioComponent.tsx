import { useEffect, useRef } from "react";
import axiom from "../assets/audio/axiom_loop.ogg";
import { useAudioStore } from "../lib/zustand";
export default function AudioComponent() {
  const { change, audioState } = useAudioStore();
  const introRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    introRef.current!.volume = 0.1;
    if (!audioState) {
      introRef.current?.pause();
    } else {
      introRef.current?.play();
    }
  }, [audioState]);
  return (
    <>
      <audio ref={introRef} autoPlay src={axiom} />

      <div
        onClick={change}
        className={`fixed top-0 right-0 p-1 scale-75 cursor-pointer z-30  ${
          audioState ? "brightness-[100]" : ""
        }`}
      >
        <img src="/src/assets/startup/audio_headphones.png" />
      </div>
    </>
  );
}
