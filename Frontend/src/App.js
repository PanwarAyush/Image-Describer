import React, { useState } from 'react';
import './App.css'
import Axios from 'axios'

function App() {
  const [Data,setData]=useState('')
  const [Caption,setCaption]=useState('')
  let formData= new FormData();
  const onFileChange=(e)=>{
    if(e.target && e.target.files[0]){
      formData.append('file',e.target.files[0]);
    }
  }
 const submitFileData=()=>{
    Axios.post(
       "http://localhost:5000/",
        formData,
    )
      .then(function (response) {
        //handle success
         setData(response.data.image)
         console.log(response.data.image)
         setCaption(response.data.caption)
         console.log(response.data.caption)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
};
return (
    <div className="App">
      <header className="App-header">
        <div>
        <input type="file" name="userfile" placeholder="Your Image" onChange={onFileChange}/>  
        <button className='block' type="submit" onClick={submitFileData} >Submit</button>
        </div>
        <div>
        <img src={"static/"+Data} alt="" width="500px"/>
        <h3>{Caption}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;