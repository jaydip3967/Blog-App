
import { NavbarDefault } from './component/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from './store/Blogslice';
import { useEffect } from 'react';
import Maybenavbar from './component/Maybenavbar';
import ScrollToTop from './component/ScrollToTop';
import CreatBlog from './pages/CreatBlog';
import SignupLogin from './pages/SignupLogin';
import Home from './pages/Home';
import { Footer } from './component/Footer';
import SingleBlog from './pages/SingleBlog';
import BlogCategory from './pages/BlogCategory';
import MyBlog from './pages/MyBlog';
import Protect from './Protect';
import './App.css';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlog())
  }, [])
  return (
    <div className='bg-white dark:bg-[#0f172a]'>
      <BrowserRouter>
        <Maybenavbar>
          <NavbarDefault />
        </Maybenavbar>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<SignupLogin/>}></Route>
          <Route path='/blog/:id' element={<SingleBlog/>}></Route>
          <Route path='category/:name' element={<BlogCategory/>}></Route>
          <Route path='/myblog' element={<Protect><MyBlog/></Protect>}></Route>
          <Route path='/createblog' element={<CreatBlog/>}></Route>
        </Routes>
        <Maybenavbar>
          <Footer/>
        </Maybenavbar>
      </BrowserRouter>
    </div>
  )
};

export default App;
