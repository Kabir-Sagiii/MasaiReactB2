import Footer from "./Components/Footer/Footer";
const Header = ({ item1 }) => {
  return (
    <div>
      <h2>Header Component</h2>
      <ol>
        <li>{item1}</li>
        <li>Angular</li>
        <li>Java</li>
        <li>Javascript</li>
      </ol>
      {/* <Footer /> */}
    </div>
  );
};

export default Header;
