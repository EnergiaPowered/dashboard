import React  from 'react'
import Layout from './../../../../shared/Layout/index';
import axios from "axios";
import { useState ,useEffect } from 'react';
import FormCard from './Components/membercard/index';

const ViewResponses = () => {
  const [forms, setForms]=useState();
  async function getForms(){
    axios.get(`http://localhost:8000/forms/`)
    .then((res)=>{
      setForms(res.data)
    })
    
  }
  useEffect(()=>{
    getForms();
  },[forms])
  
  const handledelete = async(name)=>{
     axios.delete(`http://localhost:8000/forms/${name}`).then((res) => {
       setForms(res.data);
     });

  }
    return (
     <Layout route="/forms">
      <h1>Forms</h1>
      {forms?(
      <div className="flex-container">
        {forms.map((formName ,index) => (
          <FormCard key={index} formName={formName} handledelete={handledelete}/>
        ))}
      </div>):null}
    </Layout>
    );
}
 
export default ViewResponses;
