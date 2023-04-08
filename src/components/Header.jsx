import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import moonIcon from '../assets/moonIcon.svg'
import sunIcon  from '../assets/sunIcon.svg'
import { AppContext } from '../context/AppContext'
function Header() {
  const { theme, themeChangehandl} = useContext(AppContext)
  return (
    <header className='h-12 mx-auto flex items-center px-1 dark:bg-slate-900 dark:text-slate-100 bg-slate-50 drop-shadow-lg  fixed top-0 inset-x-0 z-10'>

      <nav className='w-screen max-w-4xl mx-auto flex justify-between'>
        <ul className='flex gap-x-3'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/ai'}>AI</Link></li>
          <li><Link to={'/web-development'}>Web Devlopare</Link></li>
          <li><Link to={'/softwere-engineer'}>Software Engineer</Link></li>
        </ul>

        <div>
          <button
            className='themeBtn'
            onClick={themeChangehandl}
          >
          {
            theme ? (<img src={moonIcon} alt='moonIcon' />) : (<img src={sunIcon} alt='sunIcon' className=''/>)
          }
        </button>
      </div>
      </nav>
      
    </header>
  )
}

export default Header