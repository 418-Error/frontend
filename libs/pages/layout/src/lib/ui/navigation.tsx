import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon, UserCircleIcon, ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline'
import {classNames} from "@draco/utils";
import {useSelector} from "react-redux";
import {getUserState} from "@draco/domains/users";

export function Navigation() {
  const user = useSelector(getUserState)

  return (
    <Disclosure as="nav" className="bg-none absolute w-full">
      {({ open }) => (
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                    className="h-8 w-auto"
                    src="logo.svg"
                    alt="Your Company"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              { user.user ? (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.user?.avatar_url}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 flex justify-between items-center')}
                          >
                            <span className="text-sm leading-6">Profile</span>
                            <UserCircleIcon className="h-5 ws-5"/>

                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'flex items-center justify-between px-4 py-2 text-sm text-red')}
                          >
                            <span className="text-sm leading-6">Sign out</span>
                            <ArrowRightOnRectangleIcon className="h-5 ws-5"/>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <>
                </>
              )}

            </div>
          </div>
        </div>
      )}
    </Disclosure>
  )
}
