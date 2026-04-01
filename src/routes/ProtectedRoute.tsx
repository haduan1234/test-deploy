import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const token = useAuthStore((s) => s.accessToken);

  if (!token) return <Navigate to="/login" />;

  return <>{children}</>;
}