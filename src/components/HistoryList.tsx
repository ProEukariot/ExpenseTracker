import { useContext } from "react";
import { Context as expenseContext } from "../context/GlobalContext";

const spanStyle = { width: "4px", height: "100%", top: 0, right: 0 };

const HistoryList = () => {
  const expenseProvider = useContext(expenseContext);

  return (
    <div className="text-start">
      <h2>History</h2>
      <hr />
      <ul className="list-group rounded-0">
        {expenseProvider.state.map((expense) => {
          let sign = expense.amount > 0 ? "+" : "-";
          return (
            <li
              key={expense.id}
              className="list-group-item position-relative d-flex justify-content-between"
            >
              <div>{expense.text}</div>{" "}
              <div>
                {sign}${Math.abs(expense.amount).toFixed(2)}
              </div>
              <span
                className={
                  "position-absolute " +
                  (expense.amount <= 0 ? "bg-danger" : "bg-success")
                }
                style={spanStyle}
              ></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistoryList;
