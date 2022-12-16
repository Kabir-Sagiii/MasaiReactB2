import Nav from "./Component/Nav/Nav";
import Timer from "./Component/Timer/Timer";
import Dom from "./Component/DOM/Dom";
// import Form from "./Component/Form/UnControlledForm";
import ControlledForm from "./Component/Form/ControlledFrom";
function App() {
  return (
    <div>
      <Nav />
      {/* <Form /> */}
      {/* <Timer />
      
      <Dom /> */}
      <ControlledForm />
    </div>
  );
}

export default App;
