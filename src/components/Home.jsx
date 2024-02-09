import React,{useState,useEffect} from 'react'
import Topbar from './Topbar'
import axios from 'axios'
import { APP_URL } from '../App'
import DisplayCard from './common/DisplayCard'
function Home() {
    let [datas,setDatas] = useState([])
    let  getDatas=async()=>{
        try{
         let res = await axios.get(`${APP_URL}/user`)
         if(res.status===200){
            setDatas(res.data)
         }
        }
        catch(error){
            console.log(error)
        }
         }
   useEffect(()=>{
     getDatas()
   },[])
  return <>
  <Topbar/>
     
  <div className='previewWrapper'>
    {/* {
      datas.map((e)=>{
        return <DisplayCard name={e.name} username={e.email} email={e.password} website={e.status} role={e.role}  key={e._id}/>
              
    })
    } */}
    </div>

    </>
}
export default Home