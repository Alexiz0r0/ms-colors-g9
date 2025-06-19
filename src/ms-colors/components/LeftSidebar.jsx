import { NavLink } from "react-router-dom";
import { Avatar, Button } from "../../ui";
import {
  useAuthStore,
  usePreListaStore,
  useSidebarStore,
  useUiStore,
} from "../../hooks";

import { useEffect, useRef } from "react";

const user = [
  {
    id: 1,
    title: "Listado",
    url: "/listar-items",
  },
];

const admin = [
  {
    id: 1,
    title: "Listado",
    url: "/listar-items",
  },
  {
    id: 2,
    title: "Crear",
    url: "/crear",
  },
  {
    id: 3,
    title: "Grupos",
    url: "/listar-grupo",
  },
];

export const LeftSidebar = () => {
  const { startLogout, user: usuario } = useAuthStore();
  const { isOpen, closeSidebar } = useSidebarStore();
  const { limpiarLista } = usePreListaStore();
  const { onCloseModal } = useUiStore();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedInsideSidebar = sidebarRef.current?.contains(e.target);
      const clickedToggleButton = e.target.closest("[data-toggle-button]");

      if (isOpen && !clickedInsideSidebar && !clickedToggleButton) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeSidebar]);

  let isAdmin = true;

  if (usuario.role === "USUARIO") {
    isAdmin = !isAdmin;
  }

  const navItems = isAdmin ? [...admin] : [...user];

  const onLogout = () => {
    startLogout();
    limpiarLista();
    closeSidebar();
    onCloseModal();
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 z-50 col-span-4 flex h-full transform flex-col justify-between bg-gray-900 p-6 text-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:static md:col-span-3 md:translate-x-0 md:rounded-2xl`}
    >
      {/* Profile Section */}
      <div className="mb-8">
        <div className="mb-4 flex flex-col items-center space-x-3">
          <Avatar char={usuario.nombre.charAt(0).toUpperCase()}></Avatar>
          <div className="mt-2 flex flex-col">
            <h3 className="font-semibold text-white">{usuario.nombre}</h3>
            <p className="text-sm text-gray-400">{usuario.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="grow">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            className={({ isActive }) =>
              `block w-full rounded-lg px-4 py-3 ${isActive ? "bg-gray-800 font-semibold" : "text-gray-400 hover:bg-gray-800"} `
            }
            to={item.url}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 flex justify-end-safe self-end">
        <Button variant="error" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
