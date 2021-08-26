import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Solutions', href: 'https://www.ravelin.com/solutions/fraud'},
  { name: 'Insights', href: 'https://www.ravelin.com/fraud-and-payments-survey-2020'},
  { name: 'Resources', href: 'https://developer.ravelin.com/'},
  { name: 'Company', href: 'https://www.ravelin.com/about-ravelin'},
]

export default function Nav() {
  return (
    <div className="max-w-6xl block m-auto md:pl-5">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Image
                      className="hidden lg:block w-auto"
                      src="/assets/ravelin-logo.png"
                      alt="Ravelin Logo"
                      width={140}
                      height={40}
                    />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 md:ml-20 sm:flex sm:space-x-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-white inline-flex items-center px-1 pt-1 text-base font-medium'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
               
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-white block py-2 text-center text-base font-medium'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
      
  )
}