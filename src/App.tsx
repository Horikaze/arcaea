import { motion } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const elementRef = useRef<HTMLDivElement>(null);

  const calculateWidth = () => {
    if (elementRef.current) {
      return elementRef.current.offsetWidth;
    }
    return 0;
  };

  return (
    <>
      <div className="w-full h-full fixed pointer-events-none">
        <motion.div
          className="h-full w-full absolute right-0 z-10"
          animate={{ x: [0, -window.innerWidth] }}
          transition={{ type: "tween", duration: 1, delay: 1 }}
        >
          <img
            className="h-full w-full object-cover object-right"
            src="/src/assets/shutter_l.png"
          />
        </motion.div>
        <motion.div
          className="h-full w-full absolute right-0"
          animate={{ x: [0, window.innerWidth] }}
          transition={{ type: "tween", duration: 1, delay: 1 }}
        >
          <img
            className="h-full w-full object-cover object-right"
            src="/src/assets/shutter_r.png"
          />
        </motion.div>
      </div>
    </>
  );
}
