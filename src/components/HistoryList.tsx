import { useContext, useState } from "react";
import { Context as expenseContext } from "../context/GlobalContext";
import { transform } from "typescript";
import "./visibleHover.css";

const spanStyle = { width: "4px", height: "100%", top: 0, right: 0 };

const HistoryList = () => {
  const expenseProvider = useContext(expenseContext);

  const handleDelete = (id: number) => {
    expenseProvider.dispatch({ type: "remove", payload: id });
  };

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
              className="list-group-item position-relative d-flex justify-content-between withBtn"
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
              <div
                className={"bg-danger position-absolute delBtn"}
                style={{
                  right: 0,
                  transform: "translate(100%, 0)",
                  width: "1.5em",
                  height: "1.5em",
                }}
              >
                <span
                  style={{ fontWeight: "500", cursor: "pointer" }}
                  className="text-light material-symbols-outlined position-absolute"
                  onClick={() => handleDelete(expense.id)}
                >
                  close
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistoryList;
