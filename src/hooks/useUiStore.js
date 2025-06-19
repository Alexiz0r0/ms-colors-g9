import { useDispatch, useSelector } from "react-redux";
import {
  toggleModal as toggle,
  onOpenModal as open,
  onCloseModal as close,
} from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ui.isModalOpen);

  const toggleModal = () => dispatch(toggle());
  const onOpenModal = () => dispatch(open());
  const onCloseModal = () => dispatch(close());

  return {
    // state
    isModalOpen,

    // actions
    toggleModal,
    onOpenModal,
    onCloseModal,
  };
};
