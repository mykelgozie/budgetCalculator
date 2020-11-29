import React from "react"
import {MdEdit, MdDelete} from "react-icons/md"


function ExpenseItem(props){

    return (

       <li className = "item">
            <div className="info">
                <span className="expenses"> {props.expense.charge}</span>
                <span className="amount"> $ {props.expense.amount}</span>

            </div>
            <div>
                <button className="edit-btn"  ariel-lebel="edit-button" onClick={()=>props.handleEdit(props.expense.id)}>
                    <MdEdit/>
                </button>
                <button className="edit-btn"  ariel-lebel="edit-button" onClick = {() => props.handleDelete(props.expense.id)}>
                    <MdDelete/>
             </button>

            </div>

       </li>
    )

}

 export default ExpenseItem