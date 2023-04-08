import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Pagination = () => {
  const { page, pageChangeHandl, totalPage } = useContext(AppContext)
  return (
    <div className='fixed bottom-0 inset-x-0 dark:bg-slate-900 bg-white drop-shadow-md border-t-2'>
      <div className="h-12 w-screen max-w-4xl mx-auto flex justify-between items-center">
        <div className="space-x-2">
          {1 < page &&
            <button
              className="py-1 px-3 dark:bg-slate-100 dark:text-black bg-black text-slate-50 border rounded-sm drop-shadow-md"
              onClick={() => pageChangeHandl(page - 1)}
            >Previous</button>
          }
          {page < totalPage &&
            <button
              onClick={() => pageChangeHandl(page + 1)}
              className="py-1 px-3 border rounded-sm shadow-lg dark:bg-slate-100  dark:text-black bg-black text-slate-50">Next</button>
          }
        </div>
        <div className="px-2">
          <p className='pageNo'> page <span>{page} </span> of <span>{totalPage}</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Pagination