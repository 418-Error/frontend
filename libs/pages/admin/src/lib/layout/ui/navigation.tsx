import {Link, useLocation} from 'react-router-dom'
import {ButtonIcon, ButtonIconStyle, ButtonSize, Tooltip} from '@draco/ui'
import {IconAwesomeEnum, IconEnum} from '@draco/enums'

export function Navigation() {
  const { pathname } = useLocation()

  const matchHomeRoute = pathname.includes("/admin/home")
  const matchQuestionRoute = pathname.includes("questions")

  return (
    <div className="w-16 h-screen dark:bg-neutral-650 border-r flex flex-col">
      <Link
        to="/"
        className="flex w-16 h-16 items-center justify-center border-b z-10 dark:border-neutral-500 border-neutral-200"
      >
        <img src="dazda" alt="logo" className="w-[28px]" />
      </Link>

      <div className="flex flex-col justify-between px-2.5 py-5 flex-grow">
        <div className="flex flex-col gap-3">
          <Tooltip content="Accueil" side="right">
            <div>
              <ButtonIcon
                className={matchHomeRoute ? 'is-active' : ''}
                icon={IconAwesomeEnum.LAYER_GROUP}
                style={ButtonIconStyle.ALT}
                size={ButtonSize.XLARGE}
                link={"/admin/home"}
              />
            </div>
          </Tooltip>

          <Tooltip content="Questions" side="right">
            <div>
              <ButtonIcon
                className={matchQuestionRoute ? 'is-active' : ''}
                icon={IconEnum.CONTAINER}
                style={ButtonIconStyle.ALT}
                size={ButtonSize.XLARGE}
                link={"/admin/questions"}
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}