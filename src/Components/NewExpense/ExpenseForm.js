import React from "react";
import './ExpenseForm.css';

function ExpenseForm(){
    return(
    <form>
        <div className="new-expense__controls">
             <div className="new-expense__control">
                <label>Title</label>
                <input type="texy" />
             </div>
             <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01'/>
             </div>
             <div className="new-expense__control">
                <label>Date</label>
                <input type="date" />
             </div>
        </div>
        <div className="new-expense__actionss">
            <button type="submit">Add</button>
        </div>
    </form>

    )

};

export default ExpenseForm;