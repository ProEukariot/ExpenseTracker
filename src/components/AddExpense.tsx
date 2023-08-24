const AddExpense = () => {
  return (
    <div>
      <h2 className="h4">Add Expense</h2>
      <hr />
      <form>
        <div className="mb-2">
          <label className="form-label">Text</label>
          <input
            className="form-control"
            type="text"
            placeholder="Some text..."
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Amount*</label>
          <input
            className="form-control"
            type="number"
            placeholder="Some amount..."
          />
          <p style={{fontSize: "0.7em"}} className="text-secondary text-end mb-0">
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
