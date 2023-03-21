import ExpenseItem from './Components/ExpenseItem'
import Expenses from './Components/Expenses';


function App() {
  let expenses = [
    {
      id:'e1',
      title:'school Fee',
      price:250,
      date:new Date(2022,5,12)
    },
    {
      id:'e2',
      title:'Books',
      price:450,
      date:new Date(2022,4,21)
    },
    {
      id:'e3',
      title:'House Rent',
      price:1250,
      date:new Date(2021,1,1)
    },
    {
      id:'e4',
      title:'Food',
      price:540,
      date:new Date(2020,8,22)
    }

  ];
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sayyed Ashfaq</h1>
        <Expenses item = {expenses} />

     
      </header>
    </div>
  );
}

export default App;
