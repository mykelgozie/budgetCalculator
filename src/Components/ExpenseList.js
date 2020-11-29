import React from "react"
import ExpenseItem from "./ExpenseItem"
import {MdDelete} from "react-icons/md"

function ExpenseList(props){

    return (

        <div>
            {/* ExpenseList
            <div>ExpenseItem</div> */}
            <ul className="list">

               {props.expenses.map((item)=>{

              return       <ExpenseItem key={item.id} expense={item} handleDelete= {props.handleDelete} handleEdit = {props.handleEdit} ></ExpenseItem>

               })}

            </ul>

            {

                 props.expenses.length > 0 && <button className="btn" onClick ={() => props.clearItem()}> Clear Expense <MdDelete className="btn-icon"/> </button>


            }
        </div>
    )

}

export default ExpenseList