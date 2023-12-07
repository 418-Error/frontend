import {PropsWithChildren} from 'react'
import {useSelector} from "react-redux";
import {getUserState} from "@draco/domains/users";
import {Navigation} from "./navigation";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <Navigation />
      <div>{ children }</div>
    </main>
  )
}