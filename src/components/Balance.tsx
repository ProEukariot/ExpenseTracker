import { useContext } from "react";
import { Context as expenseProvider } from "../context/GlobalContext";

const Balance = () => {
  const provider = useContext(expenseProvider);

  let pos = 0;
  let neg = 0;
  provider.state.forEach((expense) => {
    expense.amount > 0 ? (pos += expense.amount) : (neg += expense.amount);
  });

  const total = pos + neg;
  let sign = total > 0 ? "" : "-";

  return (
    <>
      <div className="h5">
        Available Balance
        <h2>
          {sign}${Math.abs(total).toFixed(2)}
        </h2>
      </div>
      <div className="d-flex justify-content-evenly bg-light shadow text-center">
        <div className="p-4">
          Income <h4 className="text-success">${pos.toFixed(2)}</h4>
        </div>
        <div className="p-4">
          Expenses <h4 className="text-danger">-${Math.abs(neg).toFixed(2)}</h4>
        </div>
      </div>
    </>
  );
};

export default Balance;
