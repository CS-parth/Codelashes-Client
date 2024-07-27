import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import {
  ChevronDownIcon
} from '@heroicons/react/16/solid'
import ProblemList from './ProblemList';
import { useState } from 'react';

const Problems = () => {
  const [status,setStatus] = useState(null);
  const [difficulty,setDifficulty] = useState(null);
  const [acceptance,setAcceptance] = useState(null);
  return (
    // useEffect to fetch all problems with filters 
    <>
      <div className='w-9/12 flex flex-row p-5 m-auto justify-around items-center'>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-bar_base_light py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-75 data-[active]:bg-opacity-50 data-[focus]:outline-1 data-[focus]:outline-black">
            Status
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
                <button onClick={() => setStatus('Solved')} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Solved
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={() => setStatus('Attempted')} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Attempted
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5"/>
              <MenuItem>
                <button onClick={() => setStatus('Unattempted')} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  Unattempted
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-bar_base_light py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-75 data-[active]:bg-opacity-50 data-[focus]:outline-1 data-[focus]:outline-black">
            Difficulty
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
                <button onClick={() => setDifficulty(1)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  1
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={() => setDifficulty(2)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  2
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5"/>
              <MenuItem>
                <button onClick={()=>setDifficulty(3)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  3
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={()=>setDifficulty(4)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  4
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={()=>setDifficulty(5)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  5
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={()=>setDifficulty(6)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  6
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={()=>setDifficulty(7)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  7
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={()=>setDifficulty(8)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  8
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={()=>setDifficulty(9)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  9
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={()=>setDifficulty(10)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  10
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-bar_base_light py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-75 data-[active]:bg-opacity-50 data-[focus]:outline-1 data-[focus]:outline-black">
            Acceptance
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
                <button onClick={()=>setAcceptance("lesser")} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  &#60; 50%
                </button>
              </MenuItem>
              <MenuItem>
                <button onClick={()=>setAcceptance("greater")} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-black">
                  &#62; 50%
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        </div>
        <ProblemList status={status} difficulty={difficulty} acceptance={acceptance}/>
    </>
  )
}

export default Problems