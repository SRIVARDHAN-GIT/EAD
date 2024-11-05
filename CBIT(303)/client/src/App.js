import React, {useState} from "react";
import "./App.css";
import axios from 'axios'
function App()
{
const[name,setStudentName]= useState("");
const[roll,setroll]= useState("");
const[joinDate,setjoinDate]= useState("");
const[GPA,setGPA]= useState("");
const[schlorship,setschlorship]= useState("");
const submitReview=()=>
{
axios.post('http://localhost:9000/controller',
{name:name,
rollno:roll,
Date:joinDate,
GPA:GPA,
schlorship:schlorship}).then(()=>
{
alert("Your React Page is Success....");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="text"
name="name"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>ROLL_NUMBER</b></label>
<input
type="text"
name="roll"
onChange={(e)=>{
setroll(e.target.value);
}}
required/>
<label><b>joinDate</b></label>
<input
type="text"
name="joinDate"
onChange={(e)=>{
setjoinDate(e.target.value);
}}
required/>
<label><b>GPA</b></label>
<input
type="text"
name="GPA"
onChange={(e)=>{
setGPA(e.target.value);
}}
required/>
<label><b>schlorship</b></label>
<input
type="text"
name="schlorship"
onChange={(e)=>{
setschlorship(e.target.value);
}}
required/>
<button onClick={submitReview}><b>SUBMIT</b></button>
</div>
</div>);
}
export default App;
