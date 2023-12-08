import {Route, Routes} from "react-router";
import {ROUTER_PANEL_ADMIN} from "./router";
import {Layout} from "./layout/feature/layout";

export function PageAdmin() {
  return (
    <Layout>
      <Routes>
        {ROUTER_PANEL_ADMIN.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Layout>
  )
}