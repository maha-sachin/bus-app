import React from "react";
import "./Table.css";

const Table = ({ data = null, columns = null }) => {
  // const data = useSelector(busStopList);
  const getCaps = (str) => {
    return str.toUpperCase();
  };
  //console.info("loading table", data);
  return (
    <div>
      {/* check-length validattion */}

      <table>
        <thead getbytestid="thead">
          <tr>
            {columns &&
              columns.map((head,index) => (
                <th key={index}>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row , index) => (
              <tr key={index}>
                {columns.map((col,index) => (
                  <td key={index}>{row[col.field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
