import { useState, useEffect } from "react";

function Card(props) {
  const [bike, setBike] = useState(
    "https://wallpapercave.com/wp/wp1860926.jpg"
  );
  const [pizza, setPizza] = useState(
    "https://th.bing.com/th/id/OIP.RWaaZCnAJwE8O0FxwD7y0AHaEo?pid=ImgDet&rs=1"
  );
  const [state, setState] = useState(
    "https://th.bing.com/th/id/R.d42e2e427e6cfa1ca2ed7696ff6e66e3?rik=ZcklKAipPlC%2bQQ&riu=http%3a%2f%2fdigitalsynopsis.com%2fwp-content%2fuploads%2f2014%2f06%2fsupercar-wallpapers-bugatti-3.jpg&ehk=WtfcviZKcVd56i5JO1NTcka%2fiD7dj2f3m1BUflVm75Q%3d&risl=&pid=ImgRaw&r=0"
  );

  useEffect(() => {
    console.log("useEffect Called Callback Function");
  }, [pizza, bike]);

  // const insertData = () => {
  //   localStorage.setItem("Name", "React");
  // };

  return (
    <div
      style={{
        width: "800px",
        padding: "20px",
        margin: "50px auto",
        boxShadow: "0 0 10px black",
      }}
    >
      <img src={pizza} width="300" height="300" />
      <img src={bike} width="300" height="300" />
      <h2>Car Image</h2>

      <button
        onClick={() => {
          setBike(
            "https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Superb-Honda-CBR-Bike-HD-Wallpapers.jpg"
          );
        }}
      >
        Bike
      </button>

      <button
        onClick={() => {
          // setState(pizza);
          setPizza(
            "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"
          );
        }}
      >
        Pizza
      </button>
      {/* <button onClick={insertData}> Insert Data</button> */}
    </div>
  );
}

export default Card;
