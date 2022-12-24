import C from "./C";

function B(props) {
  console.log("B");
  return (
    <div>
      <h2>B Component</h2>

      <C />
    </div>
  );
}

export default B;
