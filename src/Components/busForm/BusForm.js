import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBusStopData } from "./busFormSlice";
import classes from "./BusForm.module.css"

const BusForm = (props) => {
  const dispatch = useDispatch();

  const [enteredBusStopNo, setEnteredBusStopNo] = useState("");
  const [bustopIsTouched, setBustopIsTouched] = useState(false);

  const validBusStopNumber = enteredBusStopNo.trim().length === 5;
  const inValidBusStopNumber = !validBusStopNumber && bustopIsTouched;

  const onChangeHandler = (event) => {
    setEnteredBusStopNo(event.target.value);
  };
  
  const busStopBlurHandler = (event) => {
    setEnteredBusStopNo(event.target.value);
    setBustopIsTouched(true);
  };

  const constructNormalizedSchedules = busList => {
    // return busList.map(t => t.NormalizedSchedules = t.Schedules.reduce((acc, cur) => acc + cur.ExpectedCountdown + " mins, ", ""))
    return busList.map((time) => {
      let allTimes = time.Schedules.reduce((acc, cur) => acc + cur.ExpectedCountdown + " mins, ", "")
      let arr;
      arr = allTimes.split("")
      arr.pop();
      allTimes = arr.join("")
      time.NormalizedSchedules = allTimes
      return time
    });
  }


  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // validation
    if (enteredBusStopNo.length === 0) {
      return;
    }
    // https://api.translink.ca/rttiapi/v1/stops/60980/estimates?apikey=ngawszJRMjikR6QMofJq
    const url =
      "https://api.translink.ca/rttiapi/v1/stops/" + enteredBusStopNo + "/estimates?apikey=ngawszJRMjikR6QMofJq";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(url, options);
    let buses = await response.json();
    buses = constructNormalizedSchedules(buses)
    dispatch(updateBusStopData(buses));
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.input}>
          <label htmlFor="busStop">Enter Bus Stop Number : </label>
          <input
            id="busStop"
            type="number"
            value={enteredBusStopNo}
            onChange={onChangeHandler}
            onBlur={busStopBlurHandler}
          ></input>
          <div className={classes.demo}>Demo BusStopNo:60980</div>
          {inValidBusStopNumber && bustopIsTouched && (
            <p>Enter Valid Bus Stop Number (no long five) </p>
          )}
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Confirm</button>
        </div>
      </form>
    </div>
  );
};
export default BusForm;

