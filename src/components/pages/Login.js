import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {


    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });

    const onInputChange = e =>{
        setInpval({...inpval, [e.target.name]: e.target.value})
    };

    const onSubmit = e =>{
        e.preventDefault();

        const getUserData = localStorage.getItem("localdata");  //localdata ma save bhako data getUserData ma ayo
        // console.log(getUserData);
        const {email, password} = inpval;

        if(email === ""){
            alert("Email is empty");
        }
        else if(password === ""){
            alert("Password is empty");
        }
        else{
            if(getUserData && getUserData.length){
                const userData = JSON.parse(getUserData);
                // console.log(userData);

                const userLogin = userData.filter((el, k)=>{
                    return el.email === email && el.password === password;
                });
                if(userLogin.length === 0){
                    alert("Invalid credentials ❌❌❌");
                }
                else{
                    alert("Login sucessful ✔✔✔");
                    localStorage.setItem("user_login", JSON.stringify(userLogin));
                    history('/home');

                }
            }
        }
    }



    return (
        <>
            <div className='container mt-3'>
                <section className='row'>
                    <div className='col-lg-4 mt-3'>
                        <h3 className='text-center'>Sign In</h3>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email' name='email' onChange={e => onInputChange(e)} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'
                                    name='password' onChange={e => onInputChange(e)} />
                            </div>
                            <button type="submit" className="form-control btn bg-info text-light">Submit</button>
                        </form>

                        <p className='mt-3'>Already Have an Account <span><Link to={"/"}>SignUp</Link></span></p>

                    </div>
                    <div className='col-lg-6 mt-3'>
                        <img src='https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png' className='w-100' />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login