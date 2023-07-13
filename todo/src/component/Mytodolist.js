import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './List.css';
import axios from "axios";

const Mytodolist = () => {


    const [data, setData] = useState()
    const [input, setInput] = useState("")
    const navigate = useNavigate();

    // use ref hook for top to bottom and bottom to top
    const topRef = useRef(null)
    const bottomRef = useRef(null)

    // use for search
    useEffect(() => {
        fetchAlltask();
    }, [input])


    const token = localStorage.getItem("token")
    useEffect(() => {
        if (token) {
            fetchAlltask();
        }
        else {
            navigate("/login")
        }
    }, [])


    // Logout Button
    const logout = () => {
        localStorage.clear()
        navigate("/login");
    }

    // data fetch 
    // const fetchAlltask = () => {
    //     axios.get("http://localhost:8800/getdata", {
    //         headers: { Authorization: token }
    //     }).then((res) => {
    //         setData(res.data)
    //     })
    // }

    // data fetch using for search data
    const fetchAlltask = () => {
        axios.get(`http://localhost:8800/getdata?searchText=${input}`, {
            headers: { Authorization: token }
        }).then((res) => {
            setData(res.data)
        })
    }





    const markAsComplete = async (id) => {
        // if (confirm("Are you sure you want to mark this task as complete")) {
        const res = await axios.patch(`http://localhost:8800/mark-as-complete/${id}`);
        console.log(res);
        fetchAlltask();
        // };
    };


    const deleteTask = async (id) => {
        // if (confirm("Are you sure you want to delete this task")) {
        const res = await axios.delete(
            `http://localhost:8800/delete-task/${id}`
        );
        fetchAlltask();
        // }
    }


    return (

        <div className='hello' ref={topRef} >

            <div>
                <button className='hello-1' onClick={() => bottomRef.current.scrollIntoView()}>Scroll To Bottom</button>
            </div>

            <h1 className='cc'>Your Task Here</h1>
            <button className='hello-1' onClick={() => navigate("/list")}>Add Task</button>
            <button className='hello-1' onClick={logout}>logout</button>

            <div className='search'>
                Search Here:<input placeholder="Search Here...." onChange={(e) => setInput(e.target.value)} />
            </div>



            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Task</td>
                        <td>Date</td>
                        <td>Status</td>
                        <td>Mark As Complete</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((task, i) => (
                        <tr key={i}>
                            <td>{task._id}</td>
                            <td>{task.task}</td>
                            <td>{task.date}</td>
                            <td>{task.isCompleted ? "Done" : "Pending"}</td>
                            <td><button onClick={() => markAsComplete(task._id)}>MarkComplete</button></td>
                            <td><button onClick={() => deleteTask(task._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div ref={bottomRef}>
                <button className='hello-1' onClick={() => topRef.current.scrollIntoView()}>Scroll To Top</button>
            </div>

        </div>

    )

}

export default Mytodolist