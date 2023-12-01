import Message from "./Message";
import { motion } from "framer-motion";
const messages = [
  "/src/assets/startup/m1.png",
  "/src/assets/startup/m2.png",
  "/src/assets/startup/m3.png",
];

export default function IntroMessages() {
  return (
    <>
      <motion.div
        className="flex fixed flex-col items-center w-full top-1/4 z-40"
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 6, ease: "backIn" }}
      >
        {messages.map((mess, idx) => (
          <Message image={mess} index={idx} key={idx} />
        ))}
      </motion.div>
    </>
  );
}
