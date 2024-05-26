import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import {
  ChevronDownIcon
} from '@heroicons/react/16/solid'
import ProblemList from './ProblemList';

const Problems = () => {
  return (
    // useEffect to fetch all problems with filters 
    <>
      <div className='w-9/12 flex flex-row p-5 m-auto justify-around items-center'>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-bar_base_light py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-75 data-[active]:bg-opacity-50 data-[focus]:outline-1 data-[focus]:outline-black">
            Lists
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom start"
              className="[--anchor-gap:4px] w-52 origin-top-right rounded-xl border border-white/5 bg-black/70 p-1 text-sm/6 text-white focus:outline-none"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Edit
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Duplicate
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5"/>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Archive
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Delete
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-bar_base_light py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-75 data-[active]:bg-opacity-50 data-[focus]:outline-1 data-[focus]:outline-black">
            Lists
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom start"
              className="[--anchor-gap:4px] w-52 origin-top-right rounded-xl border border-white/5 bg-black/70 p-1 text-sm/6 text-white focus:outline-none"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Edit
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Duplicate
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5"/>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Archive
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Delete
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-bar_base_light py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-75 data-[active]:bg-opacity-50 data-[focus]:outline-1 data-[focus]:outline-black">
            Lists
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom start"
              className="[--anchor-gap:4px] w-52 origin-top-right rounded-xl border border-white/5 bg-black/70 p-1 text-sm/6 text-white focus:outline-none"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Edit
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Duplicate
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5"/>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Archive
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Delete
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-bar_base_light py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-75 data-[active]:bg-opacity-50 data-[focus]:outline-1 data-[focus]:outline-black">
            Lists
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom start"
              className="[--anchor-gap:4px] w-52 origin-top-right rounded-xl border border-white/5 bg-black/70 p-1 text-sm/6 text-white focus:outline-none"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Edit
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Duplicate
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5"/>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Archive
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Delete
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        </div>
        <ProblemList/>
    </>
  )
}

export default Problems