import axios from 'axios';
import React, { useState } from 'react'

function Create() {
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    let url = "https://6362424c7521369cd068e030.mockapi.io/ToDoList"

    const postData = () => {
        axios.post(url, {
            FName,
            LName,
            Email,
            Password
        }).then(res => {
            console.log(res);
        })
    }
    return (
        <div className='create'>
            <input placeholder='First Name' onChange={e => { setFName(e.target.value) }}></input>
            <input placeholder='Last Name' onChange={e => { setLName(e.target.value) }}></input>
            <input placeholder='Email' onChange={e => { setEmail(e.target.value) }}></input>
            <input placeholder='Password' onChange={e => { setPassword(e.target.value) }}></input>
            <button onClick={postData}>Login</button>
        </div>
    )
}

export default Create