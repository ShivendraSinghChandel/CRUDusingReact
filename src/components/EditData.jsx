import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditData=()=>{
    const {id}=useParams();
    const [mydata,setMydata]=useState({});
    

    const loadData=()=>{
        let api=`http://localhost:3000/student/${id}`;
        axios.get(api).then((res)=>{
            alert("data fetched");
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[]);

    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setMydata((values)=>({...values,[name]:value}))
    }

    const handleSubmit=()=>{
        let url=`http://localhost:3000/student/${id}`;
        axios.put(url,mydata).then((res)=>{
            alert("data updated")
        })
    }

    return(
        <>
           <h1>Edit student data</h1>
           Enter Roll no : <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} /> <br /><br />
           Enter Roll no : <input type="text" name="name" value={mydata.name} onChange={handleInput} /> <br /><br />
           Enter Roll no : <input type="text" name="city" value={mydata.city} onChange={handleInput} /> <br /><br />
           Enter Roll no : <input type="text" name="fees" value={mydata.fees} onChange={handleInput} /> <br /><br />
           <button onClick={handleSubmit}>Save Data</button>
        </>
    )
}


export default EditData;


