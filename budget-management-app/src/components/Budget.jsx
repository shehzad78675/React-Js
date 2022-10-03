import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [ editButton, setEditButton ] = useState(false);
  const [value, setValue] = useState(budget);

  const onSubmit = (event) => {
      event.preventDefault();

      dispatch({
        type: 'ADD_BUDGET',
        payload: parseInt(value)
      })
      setEditButton(false);
  }
  return (
    <div >
      {editButton ? (
          
        <form action="" className="alert alert-secondary d-flex justify-content-between align-items-center" onSubmit={onSubmit}>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            required="required"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-sm ms-2">
            Save
          </button>
        </form>
      ): ( 
        <div className="alert alert-secondary d-flex justify-content-between align-items-center">
          <span>Budget: ${budget}</span>
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => setEditButton(true)}
          >
            Edit
          </button>
        </div>
       )}
    </div>
  );
};

export default Budget;
