import {  Routes, Route } from 'react-router-dom';

import TrangIndex from './index'
import Bai01 from './Bai_1/Bai_01';
import Bai02 from './Bai_2/Bai_02';
import Bai03 from './Bai_3/Bai_03';
import AppLogin from './demo/login';
import NotFound from './NotFound';
import ErrorIndex from './demo/ErrorIndex';
import SuccessIndex from './demo/SuccessIndex';

const RouterBaiTapReact01 = () => {
    return (
        <Routes>
            <Route path='/' element={<TrangIndex/>} >
                <Route path='successindex' element={<SuccessIndex/>} />
                <Route path='errorindex' element={<ErrorIndex/>} />
            </Route>          
            <Route path='/baitap/baitap01' element={<Bai01/>} /> 
            <Route path='/baitap/baitap02' element={<Bai02/>} /> 
            <Route path='/baitap/baitap03' element={<Bai03/>} /> 
            <Route path='/applogin' element={<AppLogin/>} /> 
            <Route path='*' element={<NotFound />}/>

            
        </Routes>
    );
}
export default RouterBaiTapReact01;