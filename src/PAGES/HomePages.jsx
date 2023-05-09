import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunks } from "../store/slices/UserSlices";
import CardUser from "../components/CardUser";
import FormUser from "../components/FormUser";

const HomePages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userThunks());
  }, []);

  const { user } = useSelector((reducer) => reducer);

  const [isClose, setIsClose] = useState(false);

  const [userEditData, setUserEditData] = useState();

  const handleClose = () => {
    
    setIsClose(!isClose);
  };

  const createUser = (data) => {
    const url = "http://users-crud.academlo.tech/users/";
    axios.post(url, data).then((res) => {
      console.log(res);
      dispatch(userThunks());
    });
  };

  const deleteUser = (id) => {
    const url = `http://users-crud.academlo.tech/users/${id}/`;
    axios.delete(url).then((res) => {
      console.log(res);
      dispatch(userThunks());
    });
  };

  const editUser = (id,data ) => {
    const url = `http://users-crud.academlo.tech/users/${id}/`;
    axios.put(url, data)
    .then((res) => {
      console.log(res);
      dispatch(userThunks());
      setUserEditData()});
  };

  

  return (
    <div className="Home">
      <FormUser
        userEditData={userEditData}
        createUser={createUser}
        editUser={editUser}
        handleClose={handleClose}
        isClose={isClose}
      />

      <div className="Home_users">
        {user?.map((user) => (
          <CardUser key={user.id} setIsClose={setIsClose} isClose={isClose} editUser={editUser} setUserEditData={setUserEditData} user={user} deleteUser={deleteUser} />
        ))}
      </div>

      <div className="container_btn-create">
        <button onClick={handleClose}>create user</button>
      </div>
    </div>
  );
};

export default HomePages;
