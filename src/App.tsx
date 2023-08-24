import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import MiniDashboard from "./components/MiniDashboard";
import AddExpense from "./components/AddExpense";
import HistoryList from "./components/HistoryList";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center my-2">
      <Header />
      <Balance />
      <MiniDashboard />
      <AddExpense />
      <HistoryList />
    </div>
  );
}

export default App;
