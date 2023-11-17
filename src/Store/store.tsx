import create from "zustand";
import { persist } from "zustand/middleware";

interface FavStoreState {
  planetFavs: string[];
  addFav: (url: string) => void;
  delFav: (url: string) => void;
}

const favStore = (set: any) => ({
  planetFavs: [],
  addFav: (url: string) =>
    set((state: FavStoreState) => ({ planetFavs: [...state.planetFavs, url] })),
  delFav: (url: string) =>
    set((state: FavStoreState) => ({
      planetFavs: state.planetFavs.filter((fav) => fav !== url),
    })),
});

const persistedFavStore = persist<FavStoreState>((set) => favStore(set), {
  name: "fav_planets",
});

export const useFavStore = create(persistedFavStore);
