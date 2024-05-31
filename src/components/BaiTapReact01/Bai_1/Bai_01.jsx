
/*
Bài 1: 
Tạo ra một mảng bao gồm danh sách mã nhân viên( tối thiểu 10 mã)
Tạo một form có một input để nhập dữ liệu và một nút submit để gửi giữ liệu
Tạo state, binding dữ liệu trên ô input
Khi nhấn nút submit:
-Nếu người dùng không nhập dữ liệu thì hiển thị cảnh báo “Mã nhân viên không được để trống”.
-Nếu mã nhân viên đã tồn tại trong mảng thì hiển thị cảnh báo “Mã nhân viên đã tồn tại trong hệ thống”
-Nếu mã nhân viên chưa tồn tại trong hệ thống thì hiển thị thông báo “Thêm mã nhân viên thành công”.
*/

import  { useState } from 'react';
import './style.css';

const Bai01 = () => {
  const [employeeCode, setEmployeeCode] = useState('');
  const [employees, setEmployees] = useState(['NV01', 'NV02', 'NV03', 'NV04', 'NV05', 'NV06', 'NV07', 'NV08', 'NV09', 'NV10']);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setEmployeeCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (employeeCode.trim() === '') {
      setErrorMessage('Mã nhân viên không được để trống');
      return;
    }

    if (employees.includes(employeeCode)) {
      setErrorMessage('Mã nhân viên đã tồn tại trong hệ thống');
      return;
    }

    setEmployees([...employees, employeeCode]);
    setEmployeeCode('');
    setErrorMessage('Thêm mã nhân viên thành công');
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={employeeCode} 
          onChange={handleInputChange} 
          placeholder="Nhập mã nhân viên" 
        />
        <button type="submit">Thêm</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>{employees.join(" - ")}</p>
        
    </div>
  );
};

export default Bai01;
