import { useContext, useEffect } from "react";
import { Context, Expense } from "../context/GlobalContext";

const useLocalStorage = () => {
  const expenseMutator = useContext(Context);

  useEffect(() => {
    const expenseStr = localStorage.getItem("expenses");
    if (expenseStr) {
      const expenses = JSON.parse(expenseStr) as Expense[];
      expenseMutator.dispatch({ type: "set", payload: expenses });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenseMutator.state));
  }, [expenseMutator.state]);
};

export { useLocalStorage };
