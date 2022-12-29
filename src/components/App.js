import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Notes from './Notes'
import CreateArea from "./CreateArea";
import { useState } from 'react';





function App() {
  const[state1,c1]=useState("");
  const[state2,c2]=useState("");
const[arr1,c3]=useState([]);

 
function chan1(event)
{
c1(event.target.value);
}
function chan2(event)
{
  c2(event.target.value);
}

function Add(event)
{
  event.preventDefault();
c3((prev)=>[...prev,{state1,state2}]);
c1("");c2("");
console.log(arr1);
}

function Deleted(id)
{
  console.log("called");
  console.log(id.id);
  c3(prevItems=>{
    return prevItems.filter((item,index)=>{
      return index != id;
    });
  });
}

  return (
    <>

  <Header/>

 {/* {Notes.map( Notes => {
  return(
  <Note
  key={Notes.key}
    heading={Notes.title} writing={Notes.content}
      />)})} */}
      <CreateArea val={state1} val2={state2} clicked={Add} changed1={chan1} changed2={chan2}  />
      {arr1.map((num,index)=>
        <Note key={index} id={index} title={num.state1} content={num.state2} del={Deleted}/>)}
  <Footer/>
  </>
  );
}

export default App;
