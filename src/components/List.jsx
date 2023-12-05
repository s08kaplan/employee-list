import { useState } from "react";
import data from "../helper/data";
import "../components/css/list.css"

const List = () => {
  const [show, setShow] = useState(data);
  const [number, setNumber] = useState(0);
console.log(show.length);
  const handleNextShow = () => {
   if(number < show.length - 5){
setNumber(number + 5)
   }
   else {
   setNumber(show.length-5) 
   }
};
console.log(number);


  const handlePreviousShow = () => {
   if(number >= 5){
setNumber(number - 5)
   }else {
    setNumber(0)
   }
};
console.log(number); 

//   const { id, image, name, age, email } = show;

  return (
    <div className="main-list">
    {show.slice(number,number + 5).map(({ id, image, name, age, email }) =>
      (<article className="person" key={id}>
        <img src={image} alt={"name"} />
        <div className="name-email">
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{age} years</p>
        </div>
      </article>

))}

<div className="btns">
        <button onClick={()=> handlePreviousShow()}>Prev</button>
        <button onClick={() => handleNextShow()}>Next</button>
      </div>
    </div>
  );
};

export default List;
