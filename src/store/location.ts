import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations, Location } from "#constants";

const DEFAULT_LOCATION: Location = locations.work;

interface LocationState {
  activeLocation: Location | null;
  setActiveLocation: (location: Location | null) => void;
  resetActiveLocation: () => void;
}

const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location: Location | null) =>
      set((state) => {
        state.activeLocation = location;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
