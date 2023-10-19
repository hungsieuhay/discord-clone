import { Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"
  | "deleteServer";

type ModaleData = {
  server?: Server;
};

type ModalStore = {
  type: ModalType | null;
  data: ModaleData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModaleData) => void;
  onClose: () => void;
};

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null }),
}));
