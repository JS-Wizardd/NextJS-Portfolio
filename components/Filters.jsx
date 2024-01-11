'use client'

import { formUrlQuery } from '@/sanity/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { MotionBtn } from './MotionElm'
import { fadeIn } from '@/variants'

const links = ['NextJs', 'React.Js', 'MERN']

const Filters = () => {
  const [active, setActive] = useState('NextJs')
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilter = (link) => {
    setActive(link)

    let newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'category',
      value: link,
    })

    router.push(newUrl, { scroll: false })
  }

  return (
    <ul className=" text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-6 sm:max-w-2xl">
      {links.map((link) => (
        <MotionBtn
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          key={link}
          onClick={() => handleFilter(link)}
          className={`bg-purple-950/20 ${
            active === link && 'filter'
          } text-white whitespace-nowrap rounded-xl px-6 py-2 capitalize `}
        >
          {link}
        </MotionBtn>
      ))}
    </ul>
  )
}

export default Filters
