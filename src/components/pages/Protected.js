import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {

    const history = useNavigate();
    const {Component} = props;

    useEffect(()=>{
        let login = localStorage.getItem("user_login");
        if(!login){
            history('/login')
        }
    })

  return (
    <>
        <Component/>
    </>
  )
}

export default Protected