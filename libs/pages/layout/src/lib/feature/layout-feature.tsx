import {PropsWithChildren, useEffect} from 'react'
import Layout from '../ui/layout'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@draco/store'
import {fetchUser} from '@draco/domains/users'

export function LayoutFeature({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUser())
      .unwrap()
      .then((data) => {
        console.log(data)
      })
  }, [dispatch])

  return (
    <Layout>
      { children }
    </Layout>
  )
}