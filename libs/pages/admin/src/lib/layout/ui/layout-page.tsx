import {PropsWithChildren} from 'react'
import {Navigation} from "./navigation";

export function LayoutPage({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row relative lg:flex-shrink-0 max-w-screen min-h-screen dark:bg-[#151B2B] bg-[#E2E9F3]">
        <div className="lg:bg-white border-r flex">
          <Navigation />
        </div>

        <div className=" flex flex-col overflow-hidden w-full min-h-screen pt-2 px-2">
          {/*<TopNav />*/}
          <div className="flex min-w-0 flex-1 flex-col w-full h-full bg-white rounded-t-[4px] mr-2">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}