import { Button } from "../../ui";
import Swal from "sweetalert2";
import { TextInput, PasswordInput } from "../components";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks";
import { useEffect } from "react";

const loginFormFields = {
  loginEmail: "Nia_Mueller@hotmail.com", // Nia_Mueller@hotmail.com  Kristy70@hotmail.com
  loginPassword: "123456789",
};

export const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore();
  const { startLogout } = useAuthStore();

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
      startLogout();
    }
  }, [errorMessage]);

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log({ loginEmail, loginPassword });
    startLogin({ email: loginEmail, password: loginPassword });
  };

  return (
    <div className="animate__animated animate__bounce flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <section className="rounded-3xl bg-white p-8 shadow-xl">
        <form
          className="mx-auto flex w-full flex-col py-14 md:w-[350px]"
          onSubmit={loginSubmit}
        >
          <h2 className="text-center text-2xl leading-8 font-semibold tracking-tight">
            Bienvenido
          </h2>
          <p className="mt-2 mb-6 text-center text-sm leading-5 text-[#737373]">
            Ingresa tus datos para acceder a la plataforma
          </p>
          <label className="py-2 text-sm leading-none font-medium">
            Correo
          </label>
          <TextInput
            name="loginEmail"
            value={loginEmail}
            onChange={onLoginInputChange}
          />

          <label className="py-2 text-sm leading-none font-medium">
            Contraseña
          </label>
          <PasswordInput
            name="loginPassword"
            value={loginPassword}
            onChange={onLoginInputChange}
          />

          <Button className="mt-4">Ingresar</Button>
        </form>
      </section>
    </div>
  );
};
