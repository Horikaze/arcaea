import { motion } from "framer-motion";

export default function BottomLogo() {
  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed w-full h-full flex flex-col justify-end items-center z-20"
        transition={{ duration: 1, ease: "easeInOut", delay: 10 }}
      >
        <motion.img
          src="assets/startup/1080/title_glow.png"
          className="absolute cursor-pointer"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.img
          onClick={() => {
            console.log("playy");
          }}
          src="assets/startup/1080/title.png"
          className="absolute cursor-pointer"
        />
      </motion.div>
    </>
  );
}
