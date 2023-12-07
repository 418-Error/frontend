import {ReactNode} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "@draco/store";
import {Navigate} from "react-router";
import {LOGIN_URL} from "@draco/routes";

export interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useSelector((root: RootState) => root.user)

  if (!user.isAuthenticated) {
    return <Navigate to={LOGIN_URL} replace />
  }

  return children
}