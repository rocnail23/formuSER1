import React from "react";
import "./styles/CardUser.css"

const CardUser = ({ user, deleteUser, setUserEditData, isClose,setIsClose }) => {
  
const handleEdit = (user) => {
  if(isClose){
    setIsClose(!isClose)
  }
  setUserEditData(user)

}

const handleDelete = (id) => {
  deleteUser(id)
}


 
  return (
    <div className="CardUser">
     <div className="CardUser_info">
    <h3 className="info_names">{`${user.first_name} ${user.last_name}`}</h3>
    <p className="info_email">{user.email}</p>
    <p className="info_birhday">{user.birhday}</p>
     </div>
     <div className="CardUser_options">
        <button className="btn-delete" onClick={()=>handleDelete(user.id)}><i className='bx bx-trash' ></i></button>
        <button className="btn-edit" onClick={() => handleEdit(user)}><i className='bx bx-edit-alt'></i></button>
     </div>
    </div>
  );
};

export default CardUser;
