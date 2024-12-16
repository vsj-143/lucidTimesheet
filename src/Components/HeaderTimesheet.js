import React, { useEffect, useState } from 'react'
import logo from '../paraton.png'
import { LiaUserCircle } from "react-icons/lia";
function HeaderTimesheet() {
    let [data,setData] = useState("");

     useEffect(()=>{
        fetch("http://localhost:4000/data").then((res)=>(res.json())).then((data)=>((setData(data)) )).catch(()=>(console.log("error")
        ));
    },[])
    console.log(data);
    return (
            <div >
             <header>
                
             <div className='header'>
                 <div className='hdiv1'>
                     <img src={logo} alt='error' className='raves'/>
                        <h2>{data.country}</h2>
                    </div>
                    <div className='hdiv2'>
                        <div className='icon'>
                        <LiaUserCircle size={'2.5rem'} style={{opacity: 0.5}} />
                        </div>
                        <div className='details'>
                            <h3 className='name'><bold>{data.name}</bold></h3>
                            <span style={{color:'#555'}}>{data.workerType}</span>
                            <button>{data.status}</button>
                        </div>
                    </div>   
                </div>
                
              
                  <hr/>
                <div className='headerBody'>
                   <div>
                    <br/>
                    <p style={{marginLeft:'6.5%'}}>Timesheet</p>
                   </div>
                 <br/>

                   <div className='clientInfo'>
                    <div className='client'>
                        <p className='p'>client</p>
                        <p>{data.client} </p>
                    </div>
                    <div className='client'>
                        <p className='p'>End Client</p>
                        <p>{data.endClient}</p>
                    </div>
                    <div className='client'>
                        <p className='p'>Supplier</p>
                        <p>{data.supplier}</p>
                    </div>
                    <div className='client'>
                        <p className='p'>WBS Code</p>
                        <p>{data.wbscode}</p>
                    </div><div className='client'>
                        <p className='p'>Work Orde Name</p>
                        <p>{data.workOrderName} </p>
                    </div><div className='client'>
                        <p className='p'>Status</p>
                        <p>{data.status} </p>
                    </div><div className='client'>
                        <p className='p'>Created By(MM/DD/YY)</p>
                        <p>{data.createdBy}</p>
                    </div><div className='client'>
                        <p className='p'>Approved By(MM/DD/YY)</p>
                        <p>{data.approvedBy}</p>
                    </div>
                </div>
                </div>
          </header>
          
             </div>
    )
}

export default HeaderTimesheet
