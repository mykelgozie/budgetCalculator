import logo from './logo.svg';
import './App.css';
import ExpenseForm from "./Components/ExpenseForm"
import Alert from "./Components/Alert"
import ExpenseList from "./Components/ExpenseList"
import uuid from "react-uuid";
import { useState ,useEffect} from 'react';

// const expense  =  [
//   {  id: uuid(), charge: "rent", amount : 1200},
//   {  id: uuid(), charge: "bil", amount : 100},

// ]

const expense = localStorage.getItem("expenses")? JSON.parse(localStorage.getItem("expenses")) : [] ;



function App() {

  const [exp, setExpense] = useState(expense);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({show:true});
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  function handleAlert(text, type){

     
      setAlert({show:true, text:text, type:type});
     
  }

  useEffect(()=>{

    localStorage.setItem("expenses", JSON.stringify(exp));


  },[]);

  function  handleCharge (e) {

    setCharge(e.target.value);

  }

  function handleAmount(e){

     setAmount(e.target.value);

  }

  function handleSubmit(e){
      e.preventDefault();
      if(charge !== "" && amount > 0 ){

        if(edit){

       let temp =   exp.find((item) => {

        return item.id == id ;

          });
          temp.charge = charge;
          temp.amount = amount;
          setEdit(false);
          handleAlert("success", "item Edited" );


        }else{


          const singleExpense =  {  id: uuid(), charge: charge, amount : amount};

          setExpense((items)=> {
  
            return items.concat(singleExpense)
  
          });
          handleAlert("success", "item added" );



        }

     
        setTimeout(() => {

          handleAlert({show:false} );

        },3000);
     
     
       

        setCharge('');
        setAmount('');
        
      } else {

       handleAlert("danger", "Invalid Entry" );
       setTimeout(() => {

        handleAlert({show:false} );

      },3000);

      }

  }

  function clearItem(){

    setExpense([]);
    handleAlert("success", "All items Deleted" );
    setTimeout(() => {

      handleAlert({show:false} );

    },3000);
  }

  function handleDelete(id){

      let tempExp = exp.filter((item)=>{

        return item.id != id

      })  
    setExpense(tempExp);
    handleAlert("danger", "item Deleted" );
    setTimeout(() => {

      handleAlert({show:false} );

    },3000);
  }

  function handleEdit(id){

 let editObj = exp.find((item)=>{

      return item.id == id

    })

    setCharge(editObj.charge)
    setAmount(editObj.amount)

    setEdit(true)
    setId(id)

  
}
  return (
    
    <div>
      { alert.show && <Alert type = {alert.text} text ={alert.type}/> }
     
      <h1>Budjet Calculator</h1>
      <main className ="App">
        <ExpenseForm charge={charge} amount ={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit ={handleSubmit} edit={edit} />
        <ExpenseList expenses ={exp} handleDelete ={handleDelete} handleEdit={handleEdit} clearItem = {clearItem}/>
      </main>
      <h1>

        Total Spending : 
          <span className = "total">

            $ { exp.reduce((acct, curr)=>{

                return acct += parseInt(curr.amount)

            }, 0)  }

          </span>

      </h1>
   
    
      {console.log(uuid())}
    </div>
  );
}

export default App;
