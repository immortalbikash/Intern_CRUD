import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Cards from './Cards';
import Chart from './Chart';

const Home = () => {

    const [users, setUser] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3333/students");
        setUser(result.data.reverse());
    }

    const deleteUser = async(id) =>{
        await axios.delete(`http://localhost:3333/students/${id}`);
        loadUser();
    }



    return (
        <>
            <div className='container shadow mt-5'>
            <Link to={'/add'} className='btn bg-success text-light m-3'>Add User</Link>

                <form className="d-flex" role="search">
                    <input className="me-2" type="search" placeholder="Search. . ." aria-label="Search" id='search'
                    onChange={(e)=> setSearchName(e.target.value)} />
                </form>

                <table class="table border">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users
                            .filter((value)=>{
                                if(searchName == ""){
                                    return value
                                }
                                else if(value.name.toLowerCase().includes(searchName.toLocaleLowerCase())){
                                    return value
                                }
                            })
                            .map((user, index) => (

                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to ={`/user/${user.id}`} className='btn btn-primary me-2'>View</Link>
                                        <Link to ={`/edit/${user.id}`} className='btn btn-outline-primary me-2'>Edit</Link>
                                        <Link onClick={()=> deleteUser(user.id)} className='btn btn-danger'>Delete</Link>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* <Chart/> */}
            <Cards/>
            <Footer/>

        </>
    )
}

export default Home