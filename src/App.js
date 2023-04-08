import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { Route, Routes } from 'react-router-dom'
// page
import Home from './components/page/Home'
import AI from './components/page/AI'
import WebDevelopment from './components/page/WebDevelopment'
import SoftwareEng from './components/page/SoftwareEng'
import { AppContext } from './context/AppContext'

function App() {
  const { fetchBlogPost } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPost();
  }, [])
  return (
    
    <div className='dark:bg-slate-900 dark:text-slate-100 bg-slate-50 font-Inter'>

      <Header />
      <div className="my-[47px] py-2">

        <Blogs />
        <Pagination />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<AI />} />
        <Route path='/softwere-engineer' element={<SoftwareEng />} />
        <Route path='/web-development' element={<WebDevelopment />} />
      </Routes>
    </div>
  )
}

export default App
