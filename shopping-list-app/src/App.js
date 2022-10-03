import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { itemName: "Apple", quantity: 1, isSelected: false },
    { itemName: "Banana", quantity: 3, isSelected: true },
    { itemName: "Books", quantity: 5, isSelected: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputField = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };
    setItems([...items, newItem]);
    setInputValue('');
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity <= 1) {
      newItems.splice(index, 1);
    } else {
      newItems[index].quantity--;
    }
    setItems(newItems);
  };

  const handleSelectedItem = (index) => {
    const newItems = [...items];
    if(newItems[index].isSelected){
      newItems[index].isSelected = false;
    }else{
      newItems[index].isSelected = true;
    }

    setItems(newItems);
  }
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            type="text"
            name=""
            id=""
            className="add-item-input"
            placeholder="Add an item..."
            onChange={handleInputField}
          />
          <FontAwesomeIcon icon={faPlus} onClick={handleAddItem} />
        </div>
        <div className="item-list">
          {items.map((item, index) => {
            return (
              <div className="item-container" key={index}>
                <div className="item-name">
                  {item.isSelected ? (
                    <>
                      <FontAwesomeIcon icon={faCheckCircle} onClick={() => handleSelectedItem(index)}/>
                      <span className="completed">{item.itemName}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCircle} onClick={() => handleSelectedItem(index)}/>
                      <span>{item.itemName}</span>
                    </>
                  )}
                </div>
                <div className="quantity">
                  <button>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      onClick={() => handleQuantityDecrease(index)}
                    />
                  </button>
                  <span>{item.quantity}</span>
                  <button>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      onClick={() => handleQuantityIncrease(index)}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">Total: {items.reduce((sum, element) => {
          return sum + element.quantity;
        }, 0)}</div>
      </div>
    </div>
  );
}

export default App;
