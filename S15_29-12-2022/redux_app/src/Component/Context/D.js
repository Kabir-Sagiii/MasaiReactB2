import { useContext } from "react";
import myContext from "./context";

function D(props) {
  const data = useContext(myContext);
  console.log("D");
  return (
    <div>
      <h2>D Component</h2>
      <dl>
        <dt> Name</dt>
        <dd>{data.name}</dd>
        <dt>City</dt>
        <dd>{data.city}</dd>
        <dt> Email</dt>
        <dd>{data.email}</dd>
      </dl>
    </div>
  );
}

export default D;
