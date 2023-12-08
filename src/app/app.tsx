// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@draco/store'
import {useEffect} from 'react'
import {fetchUser} from '@draco/domains/users'
import {Navigate, Route, Routes} from 'react-router'
import {LOGIN_URL} from '@draco/routes'
import {PageLogin} from '@draco/pages/login'
import {ROUTER} from "./main.router";
import {LayoutFeature, ProtectedRoute} from '@draco/pages/layout'
export default function App() {
  const dispatch = useDispatch<AppDispatch>()

  const user = useSelector((rootState: RootState) => rootState.user)

  useEffect(() => {
    console.log(user)
  }, [user]);

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div>
      <Routes>
        <Route path={`${LOGIN_URL}/*`} element={<PageLogin />} />

        {ROUTER.map((route) =>
          route.layout ? (
            <Route
              key={route.path}
              path={route.path}
              element={
                !route.protected ? (
                    <LayoutFeature>{ route.component }</LayoutFeature>
                ) : (
                  <ProtectedRoute>
                    <LayoutFeature>{ route.component }</LayoutFeature>
                  </ProtectedRoute>
                )
              }
            />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={
                !route.protected
                  ? route.component
                  : <ProtectedRoute>{ route.component }</ProtectedRoute>
              }
            />
          )
        )}
        <Route path="*" element={<Navigate replace to={LOGIN_URL} />} />
      </Routes>
    </div>
  )
}
