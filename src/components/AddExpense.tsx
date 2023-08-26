import { useState, useContext } from "react";
import { Expense, Context } from "../context/GlobalContext";

const initState = { name: "", amount: "" };

const AddExpense = () => {
  const [name, setName] = useState(initState.name);
  const [amount, setAmount] = useState(initState.amount);
  const expenseProvider = useContext(Context);

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    {
      let validated = true;
      setErrors([]);

      if (!name) {
        validated = false;
        setErrors((curr) => [...curr, "Name is required"]);
      }
      if (!amount) {
        validated = false;
        setErrors((curr) => [...curr, "Amount can't required"]);
      }

      if (!validated) return;
    }

    const new_exp = new Expense(+amount, name);

    expenseProvider.dispatch({ type: "add", payload: new_exp });

    setName(initState.name);
    setAmount(initState.amount);
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
            onChange={(e) => setAmount(e.target.value)}
          />
          <p
            style={{ fontSize: "0.7em" }}
            className="text-secondary text-end mt-1 mb-0"
          >
            *(Negative - expense, positive - income)
          </p>
        </div>
        <ul>
          {errors.map((error) => (
            <li key={error} className="text-danger">
              {error}
            </li>
          ))}
        </ul>
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
