
import {  NavLink, Outlet } from 'react-router-dom';


const TrangIndex = () => {
    return(
        <div> 
            <h1>Đây là thông tin ở trang index</h1> 
            <NavLink to={"/successindex"}> Trang Success Index - </NavLink>
            <NavLink to={"/errorindex"}> Trang Error Index - </NavLink>
            <NavLink to={"*"}> Trang 404</NavLink>
            <div>
                <Outlet/>
            </div>
        </div> 
    );
     
}
export default TrangIndex;