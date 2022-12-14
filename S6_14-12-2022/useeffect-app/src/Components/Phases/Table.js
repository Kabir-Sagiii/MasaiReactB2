import React from "react";

function Table(props) {
  var tableStyle = {
    width: "500px",
    margin: "50px auto",
  };
  return (
    <div>
      <table style={tableStyle} border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>S1</td>
            <td>C1</td>
          </tr>
          <tr>
            <td>101</td>
            <td>S1</td>
            <td>C1</td>
          </tr>
          <tr>
            <td>101</td>
            <td>S1</td>
            <td>C1</td>
          </tr>
          <tr>
            <td>101</td>
            <td>S1</td>
            <td>C1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
