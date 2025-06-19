import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await authApi.post("/auth/login", { email, password });
      const { data: body } = data;
      localStorage.setItem("token", body.token);
      dispatch(
        onLogin({ nombre: body.nombre, email: body.email, role: body.role }),
      );
    } catch (error) {
      console.error({ error });
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    startLogin,
    startLogout,
  };
};
