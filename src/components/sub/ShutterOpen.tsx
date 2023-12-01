import { motion } from "framer-motion";
import { useAnimStore } from "../../lib/zustand";
export default function ShutterOpen() {
  const shutterClose = async () => {
    // introMusic();
    const audio = new Audio("assets/audio/shutter_close.wav");
    audio.volume = 0.2;
    audio.play();
  };
  const { change, toPlay } = useAnimStore();
  return (
    <>
      <div className="w-full h-full fixed z-50 pointer-events-none">
        <motion.div
          onClick={() => {
            change("shutter");
          }}
          onAnimationStart={async () => {
            shutterClose();
            await new Promise((resolve) => setTimeout(resolve, 2000));
            change("main");
            change("bg");
          }}
          initial={{ x: 0 }}
          animate={
            toPlay.includes("shutter") ? { x: -window.innerWidth - 200 } : {}
          }
          className="h-full w-full absolute right-0 z-10 cursor-pointer pointer-events-auto"
          transition={{ ease: "linear", duration: 2 }}
        >
          <img
            className="h-full w-full object-cover object-right"
            src="assets/shutter_l.png"
          />
        </motion.div>
        <motion.div
          onClick={() => {
            change("shutter");
          }}
          className="h-full w-full absolute right-0 cursor-pointer"
          initial={{ x: 0 }}
          animate={
            toPlay.includes("shutter") ? { x: window.innerWidth + 200 } : {}
          }
          transition={{ ease: "linear", duration: 2 }}
        >
          <img
            className="h-full w-full object-cover object-right"
            src="assets/shutter_r.png"
          />
        </motion.div>
      </div>
    </>
  );
}
