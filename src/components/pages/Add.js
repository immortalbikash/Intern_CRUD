import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const history = useNavigate();


    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        if (name === "") {
            alert("Name is empty");
        }
        else if (username === "") {
            alert("Username is empty");
        }
        else if (email === "") {
            alert("email is empty");
        }
        else if (phone === "") {
            alert("Phone is empty");
        }
        else if (website === "") {
            alert("Website is empty");
        }
        else {
            await axios.post("http://localhost:3333/students", user);
            history('/home')
        }

    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mx-auto'>
                        <form className='shadow p-2' onSubmit={e => onSubmit(e)}>

                            <h3 className='text-center mt-5'>Add User</h3>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Name' name='name' value={name} onChange={e => onInputChange(e)} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Username' name='username' value={username} onChange={e => onInputChange(e)} />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' name='email' value={email} onChange={e => onInputChange(e)} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Phone number' name='phone' value={phone} onChange={e => onInputChange(e)} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Web Name' name='website' value={website} onChange={e => onInputChange(e)} />
                            </div>
                            <button type="submit" className="btn btn-primary col-lg-12">Add User</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add