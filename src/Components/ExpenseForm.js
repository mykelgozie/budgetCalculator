import React from "react"
import {MdSend} from "react-icons/md"

function ExpenseForm(props){

 
    
    return (

        <form >

         <div className ="form-center">

         
            <div className="form-group">
                <label htmlFor="charge">Charge</label>
                <input

                    type="text"
                    className="form-control"
                    id="charge"
                    name = "charge"
                    placeholder="e.g rent"
                    onChange ={(e)=> props.handleCharge(e)}
                    value={props.charge}

                
                />
             
            </div>

            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input

                    type="number"
                    className="form-control"
                    id="amount"
                    name = "amount"
                    placeholder="e.g 100"
                    onChange = {(e)=> props.handleAmount(e)}
                    value={props.amount}

                
                />
             
            </div>


            </div>
            
            
         

             <button className="btn" onClick={ (e)=>props.handleSubmit(e)} >
                { props.edit ? "Edit" : "Submit"}
                <MdSend />
             </button>


            
   

        </form>

      
    )

}


export default ExpenseForm