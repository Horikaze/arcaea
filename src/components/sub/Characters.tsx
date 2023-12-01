import { motion } from "framer-motion";

export default function Characters() {
  return (
    <>
      <motion.div
        className="fixed max-w-[26rem] md:max-w-[38rem] xl:md:max-w-[50rem] 2xl:max-w-[64rem] -right-16 xl:right-8 2xl:right-24 -mb-6 xl:-mb-9 2xl:-mb-12 scale-90 bottom-0 flex flex-col justify-end"
        animate={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut", delay: 10 }}
      >
        <motion.img
          src="assets/startup/char_h.png"
          className="object-cover"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 11,
          }}
        />
      </motion.div>
      <motion.div
        className=" fixed max-w-[26rem] md:max-w-[38rem] xl:md:max-w-[50rem] 2xl:max-w-[64rem] -left-24 xl:left-8 2xl:right-24  bottom-0 flex flex-col  justify-end"
        animate={{ x: [0, -50], opacity: [0, 1] }}
        transition={{ duration: 1, delay: 10 }}
      >
        <motion.img
          src="assets/startup/char_t.png"
          className="object-cover"
          animate={{
            y: [8, 0, 8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 11,
          }}
        />
      </motion.div>
    </>
  );
}
