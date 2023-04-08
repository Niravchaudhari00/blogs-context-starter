import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl'

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
     const [posts, setPosts] = useState([]);
     const [page, setPage] = useState(1);
     const [totalPage, setTotalPage] = useState(null);
     const [loading, setLoading] = useState(false);
     const [theme, setTheme] = useState(false)
     const [pageSize,setPageSize] = useState(null)
     // API Call
     const fetchBlogPost = async (page = 1) => {
          let url = `${baseUrl}?page=${page}`;
          setLoading(true)
          try {
               const respons = await fetch(url);
               const data = await respons.json();

               setPosts(data.posts);
               setPage(data.page);
               setTotalPage(data.totalPages);
               setPageSize(data.pageSize);

          } catch (error) {
               console.log("internet is not available");
               setPosts([]);
               setPage(1);
               setTotalPage(null);
          }
          setLoading(false);
     }

     const pageChangeHandl = page => {
          setPage(page);
          fetchBlogPost(page)
     }

     const themeChangehandl = () => {

          if (theme === false) {
               console.log("false k andar" + value);
               document.documentElement.classList.remove('dark');
               setTheme(true);
          } else if (theme === true) {
               console.log("true k andar" + value);
               document.documentElement.classList.add('dark');
               setTheme(false);
          }
     }

     const value = {
          loading,
          setLoading,
          page,
          setPage,
          posts,
          setPosts,
          totalPage,
          setTotalPage,
          fetchBlogPost,
          pageChangeHandl,
          theme,
          setTheme,
          themeChangehandl,
          pageSize,
     }

     return <AppContext.Provider value={value}>
          {children}
     </AppContext.Provider>
}