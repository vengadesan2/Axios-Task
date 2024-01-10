import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Topbar from './Topbar';
import axios from 'axios';
import { APP_URL } from '../App';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [doorNo, setDoorNo] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const navigate = useNavigate()
    const  handleCreate = async()=>{
        try{
             let data = {name,username,email,street,doorNo,city,zipcode,phone,website}
             let  res = await axios.post(`${APP_URL}`,data)
             if(res.status===201){
                navigate('/')
             }

        }
        catch(error){
            console.log(error
                );
        }
    }

    return <>
        <Topbar/><br/>
        <div className='container-fluid '>
                <Form>
                    <Form.Group className="mb-3 ">
                      <Form.Label className="fw-bold">Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                          </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label className="fw-bold">Email</Form.Label>
                          <Form.Control type='email' placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Door No.' onChange={(e)=>{setDoorNo(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Street' onChange={(e)=>{setStreet(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Zipcode' onChange={(e)=>{setZipcode(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Website</Form.Label>
                            <Form.Control type="text" placeholder="Enter Website"  onChange={(e)=>{setWebsite(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    
                    <Button variant="primary" onClick={()=>handleCreate()}>Submit</Button>
                </Form>    
        </div>
    </>
    
}

export default Create