import { create } from "zustand";

type IntroAnimations = "bg" | "main" | "shutter" | "none";

interface AnimState {
  toPlay: IntroAnimations[];
  change: (newAnim: IntroAnimations) => void;
}
export const useAnimStore = create<AnimState>()((set) => ({
  toPlay: ["none"],
  change: (newAnim) => set((state) => ({ toPlay: [...state.toPlay, newAnim] })),
}));

type Shutter = "close" | "open" | "none";

interface ShutterState {
  Shutter: Shutter;
  change: (newState: Shutter) => void;
}
export const useShutterStore = create<ShutterState>()((set) => ({
  Shutter: "close",
  change: (newState) => set({ Shutter: newState }),
}));

interface AudioState {
  audioState: boolean;
  change: () => void;
}
export const useAudioStore = create<AudioState>()((set) => ({
  audioState: true,
  change: () => set((state) => ({ audioState: !state.audioState })),
}));
