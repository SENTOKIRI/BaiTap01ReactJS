/*
	Tạo một form có một input để nhập dữ liệu và một nút submit để gửi giữ liệu 
	Tạo state, binding dữ liệu trên ô input
	Tạo ra một mảng trống để
	Khi nhấn nút submit:
v	Nếu người dùng không nhập gì thì hiển thị cảnh báo “Mã nhân viên không được để trống”
v	Nếu mã nhân viên không bắt đầu với 2 ký tự “NV” thì hiển thị cảnh báo “Mã nhân viên không đúng định dạng”
	Nếu mã nhân viên < 8 thì hiển thị cảnh báo “Mã nhân viên không được ngắn hơn 8 ký tự”
	Nếu mã nhân viên > 16 ký tự thì hiển thị cảnh báo “Mã nhân viên không được dài hơn 16 ký tự”
	Nếu mã nhân đã đúng định dạng và độ dài thì tiến hành thêm nhân viên vào mảng

*/



import  { useState } from 'react';
import './style.css';

const Bai03 = () => {
  const [employeeCode, setEmployeeCode] = useState('');
  const [employees, setEmployees] = useState([]);
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


    if (!employeeCode.startsWith("NV")) {
        setErrorMessage('Mã không đúng định dạng');
        return;
    }
    if (employeeCode.trim().length < 8) {
        setErrorMessage('Mã không được nhỏ hơn 8 ký tự');
        return;
    }

    if (employeeCode.trim().length > 16) {
        setErrorMessage('Mã không được lớn hơn 16 ký tự');
        return;
    }

    setEmployees([...employees, employeeCode]);
    setEmployeeCode('');
    setErrorMessage('Thêm mã nhân viên thành công');
  };

  return (
    <div className='block' >
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

export default Bai03;
