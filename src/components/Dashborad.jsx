import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { APP_URL } from '../App';
import axios from 'axios';
import Edit from './Edit';
import { useNavigate } from 'react-router-dom';
function Dashborad(){
    let [datas,setDatas]=useState([])
// console.log(datas)
let navigate =useNavigate()

   const  getDates = async()=>{
    try{
        let res = await axios.get(`${APP_URL}/user`)
      if(res.status===200){
        // console.log(res)
            setDatas(res.data.user)
      }
    }
    catch(error){
        console.log(error);
    }
}

const handleDelete = async(id)=>{
    try {
      let res = await axios.delete(`${APP_URL}/user/${id}`)
      if(res.status === 200){
        getDates()
      }
    } catch (error) {
       console.log(error);
    }
  }



useEffect(()=>{
    getDates()
},[])
  return <>
  
   <div>
      <Table striped bordered hover>

        <thead>
          <tr className="text-center">
            <th>S.No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
            datas.map((e,_id)=>{
                 return <tr key={_id}>
                <td>{_id+1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>/
                <td>{e.password}</td>
                <td>{e.status}</td>
                <td>{e.role}</td>
                <td>{e.createAt}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" defaultChecked={e.status} />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <Button variant='secondary' onClick={()=>navigate(`/edit/${e._id}`)} >Edit</Button>
                  &nbsp;
                  <Button variant='danger' onClick={()=>handleDelete(e._id)}>Delete</Button>
                </td>
              </tr>
            })
        }       
          
        </tbody>
      </Table>
    </div>
  </>
}

export default Dashborad