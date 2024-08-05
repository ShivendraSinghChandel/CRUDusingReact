import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Display=()=>{
const [mydata,setMydata]=useState([]);

const loadData=()=>{
    let url="http://localhost:3000/student";
    axios.get(url).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
    })
}

useEffect(()=>{
    loadData();
},[]);

const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td> {key.rollno}  </td>
            <td> {key.name}  </td>
            <td> {key.city}  </td>
            <td> {key.fees}  </td>
        </tr>
        </>
    )
})
    return(
        <>
        <h1>This is Display page</h1>

        <Table>
            <thead>
                <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                </tr>
                
            </thead>
            <tbody>
                {ans}
            </tbody>
            
        </Table>
        </>
    )
}

export default Display;

