import { motion } from "framer-motion";
export default function Message({
  image,
  index,
}: {
  image: string;
  index: number;
}) {
  return (
    <motion.img
      src={image}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 2.3,
        delay: index * 2.5,
      }}
    />
  );
}
