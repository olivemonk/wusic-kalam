import { create } from "zustand";

type CreateStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useCreate = create<CreateStore>((set, get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
