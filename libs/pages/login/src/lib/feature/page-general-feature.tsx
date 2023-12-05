import {useRedirectIfLogged} from "../hooks/use-redirect-if-logged";
import {PageGeneral} from "../ui/page-general";

export function PageGeneralFeature() {
  useRedirectIfLogged()

  return (
    <PageGeneral />
  )
}