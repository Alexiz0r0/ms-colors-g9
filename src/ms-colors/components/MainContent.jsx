import { getCurrentDate } from "../../helpers";
import { useAuthStore, useSidebarStore, useUiStore } from "../../hooks";
import { IconButton } from "../../ui";

export const MainContent = ({ children }) => {
  const { date } = getCurrentDate();
  const { toggleSidebar } = useSidebarStore();
  const { toggleModal } = useUiStore();

  const { user: usuario } = useAuthStore();
  let isAdmin = true;

  if (usuario.role === "USUARIO") {
    isAdmin = !isAdmin;
  }

  return (
    <div
      className={`col-span-12 flex flex-col overflow-hidden px-4 md:px-0 ${isAdmin ? "md:col-span-9" : "md:col-span-6"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Colors</h1>
          <p className="text-gray-500">{date}</p>
        </div>
        <div className="visible flex space-x-4 md:invisible">
          <IconButton
            iconName="menu"
            variant="light"
            onClick={toggleSidebar}
            data-toggle-button
          ></IconButton>
          {isAdmin ? (
            ""
          ) : (
            <IconButton
              iconName="add"
              variant="dark"
              onClick={toggleModal}
              data-toggle-favorite
            ></IconButton>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
