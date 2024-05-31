import { BrowserRouter , NavLink } from 'react-router-dom';
import AppRouter from './Router';

const ReactRouter1 = ()=>{
    return(
        <BrowserRouter basename="/">
        <div className="container">
          <nav>
            <NavLink to='/' exact  className="hone" >Trang chủ</NavLink>
            <NavLink to='/loai/thieunhi'>Thiếu nhi</NavLink>
            <NavLink to='/loai/nghethuatsong'>Nghệ thuật sống</NavLink>
          </nav>
          <main>
            <AppRouter />
          </main>
          <input/>
        </div>
        </BrowserRouter>
    );
}

export default ReactRouter1;