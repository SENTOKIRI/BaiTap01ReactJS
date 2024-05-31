import {  Routes, Route } from 'react-router-dom';

import TrangChu from './pages/TrangChu';
import SachTrongLoai from './pages/SachTrongLoai';
import Sach from './pages/Sach';
import Download from './pages/Download';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<TrangChu/>} />            
            <Route path='/sach/:id' element={<Sach/>} />      
            <Route path='/loai/:id/:pagenum?' element={<SachTrongLoai/>} />
            <Route path="/download"  element={<Download/>} />
            {/*  <Route path="/download" 
                    element={dangNhapChua? <Download/>:<Navigate to="/"/>} /> */}
        </Routes>
        
    );

}
export default AppRouter;