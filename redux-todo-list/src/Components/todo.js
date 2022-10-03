import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../actions/index";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <>
        <div className="container">
            <div>
          <div className="mt-3 mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <h1>Add new Text</h1>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => dispatch(addTodo(inputText))}>Add</button>
        </div>

        <div className="row">
          {list.map((element) => {
            return (
                 
                <div className="col-4 mt-5" key={element.id}>
                  <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                      <p className="card-text">{element.data}</p>
                       
                    <button type="button" className="btn btn-primary" onClick={() => dispatch(deleteTodo(element.id))}>Delete</button>
                    </div>
                     
                  </div>
                </div>
            //   </div>
            );
          })}
        </div>
        </div>
    </>
  );
};

export default Todo;
