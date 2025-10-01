import { closeAppModal, ModalType, openAppModal } from "@/store/appSlice";
import { useDispatch } from "react-redux";

export const useOpenModal = (modalType: ModalType) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openAppModal(modalType));
  };

  const closeModal = () => {
    dispatch(closeAppModal());
  };

  return { openModal, closeModal };
};

export const useOpenDirectModal = () => {
  const dispatch = useDispatch();

  const openModal = (modalType: ModalType) => {
    dispatch(openAppModal(modalType));
  };

  const closeModal = () => {
    dispatch(closeAppModal());
  };

  return { openModal, closeModal };
};
