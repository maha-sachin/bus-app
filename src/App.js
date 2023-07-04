
import { useSelector } from "react-redux";

import classes from "./App.module.css";
import BusForm from "./Components/busForm/BusForm.js";
import { busStopList } from "./Components/busForm/busFormSlice";
import Table from "./Components/table/Table";

function App() {
  const data = useSelector(busStopList);

  const columns = [
    { field: "RouteNo", header: "BusNo" },
    { field: "Direction", header: "Direction" },
    { field: "NormalizedSchedules", header: "WaitingTime" },
  ];
  return (
    <div className={classes.AppContainer}>
      <header className={classes.header}>
        <h2>Bus-App</h2>
        <h4>Finding Bus Details</h4>
      </header>
      <BusForm />
      {data.length > 0 && (
        <Table class="table-left" data={data} columns={columns} />
      )}
    </div>
  );
}

export default App;

