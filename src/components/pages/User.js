import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams();

    const [user, setUser] = useState([]);

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:3333/students/${id}`);
        setUser(result.data);
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 mx-auto mt-5'>

                        <ul class="list-group">

                            <li class="list-group-item">Name: {user.name}</li>
                            <li class="list-group-item">Username: {user.username} </li>
                            <li class="list-group-item">Email: {user.email} </li>
                            <li class="list-group-item">Phone: {user.phone}</li>
                            <li class="list-group-item">Web: {user.website}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default User