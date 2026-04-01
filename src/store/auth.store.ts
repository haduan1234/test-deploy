import { create } from "zustand";

type AuthState = {
  accessToken: string | null;
  setToken: (access: string, refresh: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("access_token"),

  setToken: (access, refresh) => {
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
    set({ accessToken: access });
  },

  logout: () => {
    localStorage.clear();
    set({ accessToken: null });
  },
}));