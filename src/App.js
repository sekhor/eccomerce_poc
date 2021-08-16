import "./App.css";
import Footer from "./Utility/Footer/Footer";
import Header from "./Utility/Header/Header";
import Products from "./Catalog/Product";

function App() {
  const title = "Intel - Online Bazzar 1";

  const content = "Copyright &copy; Intel Malaysia";
  return (
    <div className="container">
      <Header title={title} />
      <Products></Products>
      <Footer>{content}</Footer>
    </div>
  );
}

export default App;
