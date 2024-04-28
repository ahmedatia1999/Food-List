import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);

  //get all cat unique
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);

  //filter by category
  const filterbycategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  //filter by search
  const filterbysearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterbysearch={filterbysearch} />
      <Container>
        <Header />
        <Category
          filterbycategory={filterbycategory}
          allCategory={allCategory}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
