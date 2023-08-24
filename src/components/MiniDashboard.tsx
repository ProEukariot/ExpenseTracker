const MiniDashboard = () => {
  return (
    <div className="d-flex justify-content-evenly bg-light shadow text-center">
      <div className="p-4">
        Income <h4 className="text-success">$500.00</h4>
      </div>
      <div className="p-4">
        Expenses <h4 className="text-danger">$320.00</h4>
      </div>
    </div>
  );
};

export default MiniDashboard;
