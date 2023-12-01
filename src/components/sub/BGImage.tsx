import { motion } from "framer-motion";
import { useAnimStore } from "../../lib/zustand";

export default function BGImage() {
  const { change, toPlay } = useAnimStore();
  return (
    <>
      <motion.div className="fixed w-full h-full top-0 pointer-events-none">
        <motion.img
          className="object-cover h-full w-full"
          src="assets/startup/1080/bg.jpg"
          initial={{ objectPosition: "100% 0%" }}
          animate={toPlay.includes("bg") ? { objectPosition: "100% 100%" } : {}}
          onAnimationStart={() => {
            change("main");
          }}
          transition={{ ease: "easeInOut", duration: 7 }}
        />
      </motion.div>
    </>
  );
}
