import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar as toggle,
  openSidebar as open,
  closeSidebar as close,
} from "../store";

export const useSidebarStore = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const toggleSidebar = () => dispatch(toggle());
  const openSidebar = () => dispatch(open());
  const closeSidebar = () => dispatch(close());

  return {
    // state
    isOpen,

    // actions
    toggleSidebar,
    openSidebar,
    closeSidebar,
  };
};
