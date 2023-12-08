import { IconAwesomeEnum, IconEnum } from "@draco/enums"
import { Button, ButtonIcon, ButtonIconStyle, Icon, Tooltip } from "@draco/ui"
import { classNames } from "@draco/utils"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

export function Navigation () {
  const { pathname } = useLocation()

  const matchHomeRoute = pathname.includes('/admin/home')
  const matchQuestionsRoute = pathname.includes(`/questions`)

  return (
    <div className="w-16 h-screen dark:bg-neutral-650 bg-white flex flex-col">
      <Link
        to={"/"}
        className="flex w-16 h-16 items-center justify-center border-b z-10 dark:border-neutral-500 border-neutral-200"
      >
        <Icon name={IconEnum.CONSOLE} className="w-9 p-4" />
      </Link>

      <div className="flex flex-col justify-between px-2.5 py-5 flex-grow">
        <div className="flex flex-col gap-3">
          <Tooltip content="Accueil" side="right">
            <div>
            <ButtonIcon 
              className={classNames(matchHomeRoute ? 'is-active': '')}
              icon={IconEnum.ENVIRONMENT}
              style={ButtonIconStyle.ALT}
              link={'/admin/home'}
              iconClassName="!w-9"
            />
            </div>
            
          </Tooltip>

          <Tooltip content="Projets" side="right">
            <div>
              <ButtonIcon 
                className={classNames(matchQuestionsRoute ? 'is-active': '')}
                icon={IconEnum.ENVIRONMENT}
                style={ButtonIconStyle.ALT}
                link={'/admin/questions'}
                iconClassName="!w-9"
              />
            </div>
           
          </Tooltip>
        </div>
      </div>

      <div className="flex w-16 h-16 mb-5 items-center justify-center border-t dark:border-neutral-500 border-neutral-200">
        <div>
          dad
        </div>
      </div>
    </div>
  )
}