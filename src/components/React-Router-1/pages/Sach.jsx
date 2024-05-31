import { useParams } from "react-router-dom";
const Sach = () => {
    let { id  } = useParams(); 
    return(
      <div> <h1>Đây là trang chi tiết của sách {id} </h1> </div>
    )  
}
export default Sach;