'use client'
import { useRef, useEffect } from 'react'

import Link from 'next/link'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaCloudDownloadAlt,
} from 'react-icons/fa'

const Header = () => {
  const hoverRef = useRef(null)

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let iterations = 0

    const hoverEffect = (event) => {
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split('')
          .map((_, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index]
            }
            return String.fromCharCode(65 + Math.floor(Math.random() * 26))
          })
          .join('')

        if (iterations >= event.target.dataset.value.length) {
          clearInterval(interval)
          iterations = 0
        }

        iterations += 1 / 3
      }, 30)
    }

    hoverRef.current.addEventListener('mouseover', hoverEffect)

    return () => {
      hoverRef.current.removeEventListener('mouseover', hoverEffect)
    }
  }, [])

  return (
    <header className="py-8 snap-start">
      <div className="container mx-auto">
        <div className="flex  w-full justify-between items-center">
          <div
            className="cursor-pointer rounded-full text-shadow text-2xl font-bold text-green hover:tracking-widest transition-all"
            data-value="AJESH"
            ref={hoverRef}
          >
            AJESH
          </div>
          {/* resume */}
          <a
            href="https://drive.google.com/file/d/19_AIREJ1SKcZ_f0y3giKg-o63bCL9u9I/view?usp=sharing"
            target="_blank"
            className="btn btn-sm gradient projectCount text-gray-700 flex gap-x-1 items-center px-6 hover:scale-[.87] transition-all scale-[0.85]"
          >
            <p className="font-semibold"> resume</p>{' '}
            <FaCloudDownloadAlt className="scale-105" />
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header
