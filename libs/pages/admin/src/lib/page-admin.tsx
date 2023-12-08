import {Route, Routes} from "react-router";
import {ROUTER_PANEL} from "./router";
import {LayoutPanel} from "./feature/layout";

export function PageAdmin () {
  return (
    <LayoutPanel>
      <Routes>
        { ROUTER_PANEL.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </LayoutPanel>
  )
}