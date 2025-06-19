import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { useAuthStore } from "../hooks";
import { LoadingView } from "../ui";
import { ColorsRouter } from "../ms-colors";

export const AppRouter = () => {
  const { status } = useAuthStore();

  if (status === "checking") {
    return <LoadingView />;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<ColorsRouter />} />
          <Route path="/" element={<Navigate to="/listar-items" />} />
        </>
      )}
    </Routes>
  );
};
