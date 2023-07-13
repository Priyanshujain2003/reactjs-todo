import React, { useState } from 'react'
import { useNavigate } from "react-router";
import '../App.css';
import axios from "axios";



const AddToDO = (props) => {

    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!task || !date) {
            alert("Please Enter Valid Task And Date");
            return;
        }

        const data = {
            task: task,
            date: date
        }

        // jb backend se message print krwana ho tb 
        // connect frontend to backend
        //   const res = await axios.post("http://localhost:8800/addtask", data).then((res)=>{
        //     alert(res.data.message);
        //     navigate("/table")
        //   })
        const token = localStorage.getItem("token")
        const res = await axios.post("http://localhost:8800/addtask", data, {
            headers: {
                Authorization: token
            }
        })
        navigate("/table")
    }



    return (
        <div className='head'>
            <form className='form-2' onSubmit={handleSubmit}>
                <h1>ADD TASK </h1><br></br>
                <label className='label-1'>Task Name</label>
                <input className='input-1' type='text' placeholder='Please Task Here'
                    onChange={(e) => setTask(e.target.value)}
                />
                <br></br><br></br>
                <label className='label-1'> Enter Date</label>
                <input className='input-1' type='date' placeholder='Select a Date'
                    onChange={(e) => setDate(e.target.value)}
                />
                <br></br><br></br>
                <input className='btn-1' type='submit' value="Add Task" />
            </form>
        </div>
    )
}

export default AddToDO;