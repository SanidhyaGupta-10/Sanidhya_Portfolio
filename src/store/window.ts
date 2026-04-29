import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG, WindowConfig } from "#constants";

interface WindowState {
  windows: WindowConfig;
  nextZIndex: number;

  openWindow: (windowKey: string, data?: Record<string, unknown> | null) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowState>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: string, data: Record<string, unknown> | null = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (win) {
          win.isOpen = true;
          win.zIndex = state.nextZIndex;
          win.data = data ?? win.data;
          state.nextZIndex++;
        }
      }),
    closeWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (win) {
          win.isOpen = false;
          win.zIndex = INITIAL_Z_INDEX;
          win.data = null;
        }
      }),
    focusWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (win) {
          win.zIndex = state.nextZIndex++;
        }
      }),
  })),
);

export default useWindowStore;
