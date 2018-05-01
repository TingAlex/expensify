import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy
  };
};
const decrementCount = ({ decrementBy = 6 }) => {
  return {
    type: "DOCUMENT",
    decrementBy
  };
};
const setCount = ({ count }) => {
  return {
    type: "SET",
    count
  };
};
const resetCount = () => {
  return {
    type: "RESET"
  };
};
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DOCUMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 6 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 100 }));
unsubscribe();
