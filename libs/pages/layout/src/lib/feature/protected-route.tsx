import {ReactNode, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@draco/store'
import {Navigate, useNavigate} from 'react-router'
import {LOGIN_URL} from '@draco/routes'
import {fetchUser, getUserState} from '@draco/domains/users'

export interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUser())
      .unwrap()
      .then((data) => {
        if (!data || !data.isAuthenticated) {
          navigate(LOGIN_URL)
        }
      })

  }, [dispatch])

  return children
}