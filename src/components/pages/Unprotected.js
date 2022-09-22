import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Unprotected = (props) => {

    const history = useNavigate();
    const {Component} = props;

    //Yo kina gareko bhanda if login bhai sakeko cha bhani Register ma jana pardaina bhanera

    useEffect(()=>{
        let login = !localStorage.getItem("user_login");
        if(!login){
            history('/home')
        }
    })
  return (
    <>
        <Component/>
    </>
  )
}

export default Unprotected