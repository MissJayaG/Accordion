// export const FAQ = ({ curData, isActive, onToggle }) => {
//     const { question, answer } = curData;
//     return (
//       <li>
//         <div className=" accordion-grid  ">
//           <p className="accordion-question">{question}</p>
//           <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
//             {isActive ? "close" : "show"}{" "}
//           </button>
//         </div>
//         {isActive && <p> {answer} </p>}
//       </li>
//     );
//   };


import {  useEffect ,useState } from "react";
export const FAQ =({curData , onToggle, isActive})=>{
        const { question, answer } = curData;
        


        const handleButton=()=>{
            setActiveId(!activeId);
        };

        return (
          <li>
            <div className=" accordion-grid  ">
              <p> {question}</p>
              <button onClick={onToggle} className={isActive ? "active-btn" : ""}> 
                
                {isActive ? "close":"show"}
              </button>
            </div>
              <p> {isActive && answer} </p>
          </li>
        );
      };