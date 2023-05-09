import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";
const FormUser = ({ createUser, handleClose,isClose, userEditData, editUser }) => {
  const { reset, handleSubmit, register, formState: {errors} } = useForm();

  const submit = (data) => {
  
    if(userEditData){
     editUser(userEditData.id,data)
    } else {
       createUser(data)
    }
    
    
  

    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birhday: "",
    });
  };

  useEffect(()=> {
    if(isClose){

      reset({
        first_name: "",
      last_name: "",
      email: "",
      password: "",
      birhday: "",
      })
    }
  },[isClose])


  useEffect(() => {
    if(userEditData){
      reset(userEditData)
    }
  },[userEditData])
  
  

  return (
    <div className={`form_container ${isClose && "noShow"}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <div className="container_btn-x"><h2>New User</h2> <button onClick={handleClose}><i className='bx bx-x'></i></button></div>
        
        <div>
          <i className="bx bx-user"></i>
          <input
            type="text"
            placeholder="first name"
            {...register("first_name", 
              
            )}
          />
          <input
            type="text"
            placeholder="last name"
            {...register("last_name")}
          />
          
        </div>
        <div>
          <i className="bx bx-envelope"></i>
          <input
            className="input90"
            type="email"
            placeholder="email"
            {...register("email")}
          />
          
        </div>
        <div>
          <i className="bx bxs-lock-alt"></i>
          <input
            className="input90"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password?.type == "minLength" && <p>hola</p>}
        </div>
        <div>
          <i className="bx bx-cake"></i>
          <input className="input90" type="date" {...register("birhday")} />
        </div>
        <button>{userEditData ? "editar" : "crear"}</button>
      </form>
    </div>
  );
};

export default FormUser;
