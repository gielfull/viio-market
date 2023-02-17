import React from 'react'
import { Link } from 'react-router-dom'

const Filters = ({categories}) => {

  return (
    <>
        <ul className='flex flex-row justify-center gap-4 mt-10'>
          <Link to='/' >
            <li key='all' className='capitalize py-2 px-4 rounded-[4px] bg-slate-600 text-white text-sm cursor-pointer'>
              All
            </li>
          </Link>

          {categories.map((category) => (
              <Link to={`/${category}`} key={category}>
                <li className='capitalize py-2 px-4 rounded-[4px] bg-slate-600 text-white text-sm cursor-pointer'>
                    {category}
                </li>
              </Link>
          ))}
        </ul>
    </>
  )
}

export default Filters