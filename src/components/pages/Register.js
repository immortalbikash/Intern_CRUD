import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const history = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    });

    const [data, setData] = useState([]);

    const onInputChange = e =>{
        // const {value, name} = e.target;
        // console.log(value, name);
        setUser({...user,[e.target.name]: e.target.value})
    };

    const onSubmit = async(e) => {
        e.preventDefault();

        const {name, email, date, password} = user;

        if(name ===""){
            alert("Name is required");
        }
        else if(email ===""){
            alert("Email is required");
        }
        else if(!email.includes("@")){
            alert("Enter valid email");
        }
        else if(date === ""){
            alert("Date is required");
        }
        else if(password === ""){
            alert("Password is required");
        }
        else if(password.length < 8){
            alert("Password is too short, It must be minimum 0f 8 characer");
        }
        else{
            localStorage.setItem("localdata", JSON.stringify([...data, user]));
            alert("Registered!!");
            history('/login')
        }
    }


  return (
    <>
        <div className='container mt-3'>
                <section className='row'>
                    <div className='col-lg-4 mt-3'>
                        <h3 className='text-center'>Registration</h3>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name' name='name' onChange={e=>onInputChange(e)} />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email' name='email' onChange={e=>onInputChange(e)} />
                            </div>
                            <div className="mb-3">
                                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                 name='date' onChange={e=>onInputChange(e)} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'
                                 name='password' onChange={e=>onInputChange(e)} />
                            </div>
                            <button type="submit" className="form-control btn bg-info text-light">Register</button>
                        </form>

                        <p className='mt-3'>Already Have an Account? <span> <Link to='/login'>Log in</Link></span> </p>

                    </div>
                    <div className='col-lg-6 mt-3'>
                        <img src='https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png' className='w-100'/>
                    </div>
                </section>
            </div>
    </>
  )
}

export default Register