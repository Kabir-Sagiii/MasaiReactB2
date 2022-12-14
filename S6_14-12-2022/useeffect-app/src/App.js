import { useState } from "react";
import Header from "./Header";
import Footer from "./Components/Footer/Footer";
import Counter from "./Components/Counter/Counter";
import List from "./Components/List/List";
import Todo from "./Components/Todo/Todo";
import Nav from "./Components/State_API/Nav";
import Profile from "./Components/State_API/Profile";
import Input from "./Components/Parent-Child/Input";
import Text from "./Components/Child-Parent/Text";
import Card from "./Components/Phases/Card";

import A from "./Components/Modules/A";
import B from "./Components/Modules/B";
import Table from "./Components/Phases/Table";

function App() {
  const [state, setState] = useState(false);
  return (
    <div>
      <Nav />
      {/* <Profile /> */}
      {state ? <Card /> : <Table />}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setState(true);
          }}
        >
          Show Card
        </button>
        <button
          onClick={() => {
            setState(false);
          }}
        >
          Show Table
        </button>
      </div>
    </div>
  );

  // var showHeader = true;

  // return <div>{showHeader ? <Header /> : <Footer />}</div>;

  // if (showHeader) {
  //   return (
  //     <div>
  //       <h2>App Component</h2>
  //       <Header />
  //     </div>
  //   );
  // } else {
  //   return <Footer />;
  // }

  // return (
  //   <div className="App">
  //     <Header item1="React" />

  //     <h2>Welcome to React World</h2>
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
  //       deserunt pariatur. Rem obcaecati possimus et reprehenderit quae
  //       assumenda optio, saepe accusantium nihil delectus perferendis sit porro
  //       soluta? Accusamus, saepe repellendus cum voluptas quidem animi quos
  //       aliquid numquam quis illo provident corrupti adipisci, consequuntur ut,
  //       suscipit voluptatibus? Earum porro, fugiat error voluptas fugit tempore
  //       maxime dolore ex deserunt pariatur suscipit officia numquam labore?
  //       Fugit facilis minus, debitis dolorum, minima aperiam vero quod ad
  //       corrupti et sequi, officia asperiores saepe nihil hic consectetur? Odit
  //       eius officiis dolorem error, dicta corrupti sequi dignissimos accusamus,
  //       quos nihil voluptatem harum vel quis laudantium quae in.
  //     </p>
  //     {/* <Footer /> */}
  //   </div>
  // );
}

export default App;
