import { createContext, useReducer} from "react";


const AppReducer = (state, action) => {

  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "REMOVE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case 'ADD_BUDGET':
      return{
        ...state,
        budget: action.payload
      }
    default:
      return state;
  }
};
const initialState = {
  budget: 1000,
  expenses: [
    { id: 12, name: "Shopping", cost: 40 },
    { id: 13, name: "Holiday", cost: 400 },
  ],
};

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
