import  faq  from "../API/faq.json";
import {  useEffect ,useState } from "react";
import { FAQ } from "./UI/FAQ";

export const Accordion=()=>{
    const[data,setData] = useState([]);
    const [activeId,setActiveId]=useState(false);

    useEffect(()=>{

        setData(faq);
    },[]);


    const handleButton =(id)=>{
        setActiveId((prevId)=>(prevId===id ? false:id) );
    };

    return (
        <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
            
            return( 
            < FAQ 
            key={curElem.id}
             curData={curElem} 
             isActive={activeId ===curElem.id} 
              onToggle ={()=>handleButton(curElem.id)}   />
            );   
                  
          })}
      </ul>
    </>

    );
};






// import faq from "../API/faq.json";
// import { useEffect, useState } from "react";
// import { FAQ } from "./UI/FAQ";

// export const Accordion = () => {
//   const [data, setData] = useState([]);

//   const [activeId, setActiveId] = useState(false); // Track active FAQ by ID
//   useEffect(() => {
//     setData(faq);
//   }, []);

//   console.log(data);

//   const handleToggle = (id) => {
//     setActiveId((prevId) => (prevId === id ? false : id));
//   };
//   return (
//     <>
//       <h1>The Accordion</h1>
//       <ul className="section-accordion">
//         {data &&
//           data.map((curElem) => {
//             const { id } = curElem;
//             return (
//               <FAQ
//                 key={id}
//                 curData={curElem.id}
//                 isActive={activeId === id}
//                 onToggle={() => handleToggle(id)}
//               />
//             );
//           })}
//       </ul>
//     </>
//   );
// };