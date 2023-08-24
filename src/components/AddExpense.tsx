import { useState } from "react";
import { Expense } from "../context/GlobalContext";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const exp = new Expense(amount, name);

    alert(exp.amount + " " + exp.id + " " + exp.text);
  };

  return (
    <div>
      <h2 className="h4">Add Expense</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <input
            name="text"
            id="text"
            className="form-control"
            type="text"
            placeholder="Some text..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="amount" className="form-label">
            Amount*
          </label>
          <input
            id="amount"
            name="amount"
            className="form-control"
            type="number"
            placeholder="Some amount..."
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
          <p
            style={{ fontSize: "0.7em" }}
            className="text-secondary text-end mb-0"
          >
            *(Negative - expense, positive - income)
          </p>
        </div>
        <input
          className="btn shadow bg-warning w-100 rounded-0"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddExpense;
