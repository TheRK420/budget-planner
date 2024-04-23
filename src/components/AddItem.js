import React, { useRef , useContext, memo} from 'react'
import { Context } from './../App';
import './AddItem.css'

const AddItem = () => {
    const { setExpnc, setTotal } = useContext(Context);
    const titleRef = useRef();
    const priceRef = useRef(); 

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents the default behavior of submitting forms
            document.getElementById("addButton").click(); // Simulates a click on the button
        }
    };

    return (
        <div className='add_sec'>
            <h1>Add Expenses</h1>
            <div className='input_sec'>
                <input ref={titleRef} placeholder='Enter title' type="text" onKeyDown={handleKeyDown} />
                <input ref={priceRef} placeholder='Enter Price' type="number" onKeyDown={handleKeyDown} />
            </div>
            
            <button
                id="addButton"
                onClick={()=>{
                    const title = titleRef.current.value;
                    const price = parseInt(priceRef.current.value);
                    if(title==="" || isNaN(price))
                    {
                        alert("Please add valid item");
                    }
                    else {
                        setExpnc(prev=>[...prev,{title,price}]);
                        setTotal(prevValue=>price+prevValue);
                        titleRef.current.value="";
                        priceRef.current.value="";   
                    }
                }}
            >
                Add
            </button>
        </div>
    );
}

export default memo(AddItem);
