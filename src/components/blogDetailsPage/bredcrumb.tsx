import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({name}:any) => {
  return (
    <ul className='bg-[#1a4885] p-2 text-white rounded-md text-[10px] flex gap-3 items-center w-fit'>
        <li>
            <Link href="/" className='text-white'>Home</Link>
        </li>
        <li>/</li>
        <li>
            <Link href="/blogs" className='text-white'>Blogs</Link>
        </li>
        <li>/</li>
        <li>
            {name}
        </li>
    </ul>
  )
}

export default Breadcrumb