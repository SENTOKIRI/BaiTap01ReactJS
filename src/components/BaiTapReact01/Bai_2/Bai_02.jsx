/* 
Bài 2:
	Tạo component tên là Form.jsx
    Chuyển giao diện từ html sang JSX
  	Khởi tạo state, áp dụng kiến thức binding 2 chiều để lấy value từ các ô input
	Kiểm tra dữ liệu đầu vào từ người dùng
v	Nếu mã để trống thì hiển thị cảnh báo “Mã không được để trống”
v	Nếu mã không bắt đầu bằng ký tự “NV” thì hiển thị cảnh báo “Mã không đúng định dạng”
v	Nếu độ dài của mã nhỏ hơn 8 ký tự thì hiển thị cảnh báo “Mã không được nhỏ hơn 8 ký tự”
v	Nếu mã có độ dài lớn hơn 16 ký tự thì hiển thị cảnh báo “Mã không được lớn hơn 18 ký tự”
v	Nếu email để trống thì hiển thị cảnh báo “Email không được để trống”
v	Nếu email không đúng định dạng thì hiển thị cảnh báo “ Email không đúng định dạng”
v	Nếu mật khẩu có độ dài nhỏ hơn 8 ký tự thì hiển thị cảnh báo “Mật khẩu không được nhỏ hơn 8 ký tự”
	Nếu tất các các dữ liệu nhập vào hợp lệ thì hiển thị “Đăng ký thành công”
*/


import { useState  } from "react";
import './style.css';

const Bai02 = () => {
    const [code, setCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputCodeChange = (event) => {
        setCode(event.target.value);
      };
    
    const handleInputEmailChange = (event) => {
        setEmail(event.target.value);
      };

    const handleInputPasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; //regex email

        //  KIEM TRA RONG
        if (code.trim() === '') {
            setErrorMessage('Mã không được để trống');
          return;
        }
        if (email.trim() === '') {
            setErrorMessage('Email không được để trống');
          return;
        }
        if (password.trim() === '') {
            setErrorMessage('Password không được để trống');
          return;
        }
    
           //  KIEM TRA SO KI TU CHUOI
        if (code.trim().length < 8) {
            setErrorMessage('Mã không được nhỏ hơn 8 ký tự');
            return;
        }

        if (code.trim().length > 16) {
            setErrorMessage('Mã không được lớn hơn 16 ký tự');
            return;
        }

        if(password.trim().length < 8){
            setErrorMessage('Mật khẩu không được nhỏ hơn 8 ký tự');
            return;
        }

        // KIEM TRA DINH DANG
        if (!code.startsWith("NV")) {
            setErrorMessage('Mã không đúng định dạng');
            return;
        }
        if(!regexEmail.test(email)){
            setErrorMessage('Email không đúng định dạng');
            return;
        }

        setErrorMessage('Đăng ký thành công');
      };



    return(
        <div className="formChinh">
            <h2>Đăng ký</h2>
            {errorMessage && <h4>{errorMessage}</h4>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="block">
                        <p>Code</p>
                        <input 
                            type="text" 
                            value={code} 
                            onChange={handleInputCodeChange} 
                            placeholder="Enter code" 
                        />
                    </div>

                    <div  className="block">
                        <p>Email</p>
                        <input 
                            type="text" 
                            value={email} 
                            onChange={handleInputEmailChange} 
                            placeholder="Enter email" 
                        />
                    </div>

                    <div  className="block">
                        <p>Password</p>
                        <input 
                            type="text" 
                            value={password} 
                            onChange={handleInputPasswordChange} 
                            placeholder="Enter password" 
                        />
                    </div>
                </div>
                <button type="submit">Đăng ký</button>
            </form>
           
        </div>
    );
};

export default Bai02;