import AudioComponent from "./components/AudioComponent";
import Intro from "./components/Intro";
import { useAnimStore } from "./lib/zustand";
export default function App() {
  const { toPlay } = useAnimStore();
  return (
    <>
      <Intro />
      {toPlay.includes("main") ? <AudioComponent /> : null}
    </>
  );
}
