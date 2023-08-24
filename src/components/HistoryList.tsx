const spanStyle = { width: "4px", height: "100%", top: 0, right: 0 };

const HistoryList = () => {
  return (
    <div className="m-2">
      <h2>History</h2>
      <hr />
      <ul className="list-group rounded-0">
        <li className="list-group-item position-relative">
          Item 1
          <span
            className="position-absolute bg-primary"
            style={spanStyle}
          ></span>
        </li>
        <li className="list-group-item position-relative">
          Item 2
          <span
            className="position-absolute bg-primary"
            style={spanStyle}
          ></span>
        </li>
        <li className="list-group-item position-relative">
          Item 3
          <span
            className="position-absolute bg-primary"
            style={spanStyle}
          ></span>
        </li>
        <li className="list-group-item position-relative">
          Item 4
          <span
            className="position-absolute bg-primary"
            style={spanStyle}
          ></span>
        </li>
      </ul>
    </div>
  );
};

export default HistoryList;
