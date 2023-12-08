import {useDispatch} from "react-redux"
import {AppDispatch} from "@draco/store"
import {PropsWithChildren, useEffect} from "react"
import {fetchUser} from "@draco/domains/users";
import {LayoutPanelPage} from "../ui/layout-page";

export function LayoutPanel ({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUser()).unwrap()
  }, [dispatch])

  return (
    <LayoutPanelPage>
      { children }
    </LayoutPanelPage>
  )
}