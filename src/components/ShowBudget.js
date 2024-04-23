import React, { useContext, memo} from "react";
import { Context } from "../App";
import "./ShowBudget.css";
import { IoIosCloseCircle } from "react-icons/io";


// const ShowBudget = ({expnc}) => {
const ShowBudget = () => {
  console.log("ReactJS00000")

  const { expnc,setExpnc, setTotal } = useContext(Context);

  const handleDelete = (index, price) => {
    const updatedExpnc = [...expnc];
    updatedExpnc.splice(index, 1);
    setExpnc(updatedExpnc);
    setTotal(prevTotal =>  prevTotal - price);
  };
  return (
    <div className="show_sec">
    <h1>Show Budget</h1>
    {expnc.length === 0 ? (
      <h2 className="dataa">Add Data To List . . . . .</h2>
    ) : (
      expnc.map((item, index) => (
        <div className="inner_show_sec" key={index}>
          <div className="span_sec">
            <span>Title: {item.title}</span>
            <span>Price: {item.price}</span>
          </div>
        
          <IoIosCloseCircle onClick={() => handleDelete(index, item.price)} />
        </div>
      ))
    )}
  </div>
  );
};

export default memo(ShowBudget);