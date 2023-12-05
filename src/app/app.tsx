// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@draco/store'
import {useEffect} from 'react'
import {fetchUser} from '@draco/domains/users'
import {Route, Routes} from 'react-router'
import {LOGIN_URL} from '@draco/routes'
import {PageLogin} from '@draco/pages/login'

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
      </Routes>
    </div>
  )
}
