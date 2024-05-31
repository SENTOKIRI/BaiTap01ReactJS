import { BrowserRouter , NavLink } from 'react-router-dom';
import RouterBaiTapReact01 from './RouterBaiTapReact01';
//import '.CSS/style'
 
const BaiTapReact01 = () => {
  return(
    <BrowserRouter basename="/">
    <div className="container" >
      <nav>
        <NavLink to='/' exact className="hone" >Trang chủ</NavLink>
        <NavLink to='/baitap/baitap01'>Bài tập 1</NavLink>
        <NavLink to='/baitap/baitap02'>Bài tập 2</NavLink>
        <NavLink to='/baitap/baitap03'>Bài tập 3</NavLink>
        <NavLink to='/applogin'>Login</NavLink>
      </nav>
      <main>
      <RouterBaiTapReact01/>
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default BaiTapReact01;