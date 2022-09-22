import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const Edit = () => {

    const history = useNavigate();

    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {name, username, email, phone, website} = user;

    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
    };


    useEffect(()=>{
        loadUser();
    }, []);

    const onSubmit = async(e) =>{
        
        e.preventDefault();
        await axios.put(`http://localhost:3333/students/${id}`, user);
        alert("form submitted");
        history('/home')
        
    };

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3333/students/${id}`)
        setUser(result.data)
    };

  return (
    <>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-6 mx-auto'>
            <form className='shadow p-2' onSubmit={e => onSubmit(e)}>

              <h3 className='text-center mt-5'>Edit User</h3>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Name' name='name' value={name} onChange={e=>onInputChange(e)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Username' name='username' value={username} onChange={e=>onInputChange(e)} />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' name='email' value={email} onChange={e=>onInputChange(e)} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Phone number' name='phone'value={phone} onChange={e=>onInputChange(e)}/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Web Name' name='website' value={website} onChange={e=>onInputChange(e)} />
              </div>
              <button type="submit" className="btn btn-warning col-lg-12">Update User</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit