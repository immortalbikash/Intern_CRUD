import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';

const Profile = () => {

    const [logindata, setLogindata] = useState([]);


    const history = useNavigate();

    const loadUserData = () => {
        const getUser = localStorage.getItem("user_login");
        if(getUser && getUser.length){
            const user = JSON.parse(getUser);
            setLogindata(user)
        }
    }

    const userLogout = () =>{
        localStorage.removeItem("user_login");
        history('/login')
    }

    useEffect(()=>{
        loadUserData();
    }, []);



  return (
    <>
        <div className='container'>
              <div className="card mx-auto mt-2 shadow" style={{ width: '18rem' }}>
              <h1 className='text-center'>Profile</h1>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZnufVFD68YO2Zb-8DFId023oZbI_tBN5H8C5Ve0&s" className="card-img-top" alt="..." />
                  
                  <div className="card-body">
                      {/* <h5 className="card-title"><span className='bg-secondary text-white'>Name: </span> </h5>
                      <h5 className="card-title"><span className='bg-secondary text-white'>Email: </span> </h5>
                      <h5 className="card-title"><span className='bg-secondary text-white'>DOB: </span> </h5> */}
                      <button onClick={userLogout} className="btn btn-primary">Logout </button>
                  </div>
              </div>
        </div>
    </>
  )
}

export default Profile