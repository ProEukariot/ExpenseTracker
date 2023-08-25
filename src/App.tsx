import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import AddExpense from "./components/AddExpense";
import HistoryList from "./components/HistoryList";

function App() {
  return (
    <div className="my-2 text-center container-md p-0 px-2">
      <Header />
      <div className="row my-2">
        <div className="col-sm-6 mb-2">
          <Balance />
        </div>
        <div className="col-sm-6">
          <AddExpense />
        </div>
      </div>
      <HistoryList />
    </div>
  );
}

export default App;
