import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {

  const {dispatch} = useContext(AppContext);

  const handleDeleteItem = () => {
    dispatch({
      type: 'REMOVE_EXPENSE',
      payload: props.id
    })
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge rounded-pill bg-primary me-3">
          ${props.cost}
        </span>
        <TiDelete size='1.5em' onClick={handleDeleteItem}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
