import { motion } from "framer-motion";

export default function Glass() {
  return (
    <>
      <motion.img
        src="assets/startup/main_glass.png "
        className="fixed w-full h-full object-cover z-10 pointer-events-none"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.04, 1] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 10,
        }}
      />
      <motion.img
        src="assets/startup/main_glass.png"
        className="fixed w-full h-full object-cover z-10"
        animate={{ opacity: [0, 1] }}
        transition={{
          ease: "easeInOut",
          delay: 10,
        }}
      />
    </>
  );
}
