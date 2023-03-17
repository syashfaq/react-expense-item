import ExpenseItem from './Components/ExpenseItem'


function App() {
  let expenseDate = new Date(2021,3,25);
  let expenseTitle = 'School Fee';
  let exdpenseAmount = 300;

  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem 
        date= {expenseDate} 
        title={expenseTitle} 
        price={exdpenseAmount}/>
     
      </header>
    </div>
  );
}

export default App;
