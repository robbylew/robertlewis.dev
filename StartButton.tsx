'use client'

import { useKBar } from 'kbar'
import { useEffect, useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

export function StartButton() {
  const {
    query: { toggle }
  } = useKBar()

  const [os, setOS] = useState('')

  useEffect(() => {
    const platform = window.navigator.platform
    platform.indexOf('Mac') !== -1 ? setOS('MacOS') : setOS('Windows')
  }, [])

  return (
    <div className="flex justify-center my-5">
      <button
        onClick={toggle}
        onTouchStart={toggle}
        className="group flex items-center gap-1 text-sm tracking-[.2em] py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition-colors duration-300 ease-in-out active:bg-pink-500 focus:outline-none scale-110 transform transition-transform duration-200 text-white font-semibold"
      >
        <span className="hidden md:inline">Begin Your</span>
        <kbd className="keyboard hidden tracking-normal opacity-90 md:inline">
          {os === 'MacOS' ? '⌘ K' : os === 'Windows' ? '⌃ K' : ''}
        </kbd>
        <span className="inline md:hidden">Click</span>
        <span>Journey</span>

        <ArrowRight
          size="1em"
          className="duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-full md:opacity-0"
        />
      </button>
    </div>
  )
}
