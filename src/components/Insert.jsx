import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert=()=>{

    const [input,setInput]=useState({});

    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values,[name]:value}));
         console.log(input);
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      let api="http://localhost:3000/student";
      axios.post(api,input).then((res)=>{
        alert("data saved")
      })
    }

    return(
        <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Roll no</Form.Label>
        <Form.Control type="text" name='rollno' value={input.rollno} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Fees</Form.Label>
        <Form.Control type="text" name='fees' value={input.fees} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;



