import { useAnimStore } from "../lib/zustand";
import BGImage from "./sub/BGImage";
import BottomLogo from "./sub/BottomLogo";
import Characters from "./sub/Characters";
import Glass from "./sub/Glass";
import IntroMessages from "./sub/IntroMessages";
import LowiroLogo from "./sub/LowiroLogo";
import ShutterOpen from "./sub/ShutterOpen";

export default function Intro() {
  const { toPlay } = useAnimStore();

  return (
    <>
      {toPlay.includes("main") ? null : <ShutterOpen />}
      <BGImage />
      {toPlay.includes("main") ? (
        <>
          <IntroMessages />
          <Glass />
          <BottomLogo />
          <Characters />
          <LowiroLogo />
        </>
      ) : null}
    </>
  );
}
