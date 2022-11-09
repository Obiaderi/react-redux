import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "tgColor":
      return { ...state, color: !state.color };
    case "newUserInput":
      return { ...state, userInput: action.payload };

    default:
      throw new Error();
  }
};

// THIS HELPS  U AVOID TYPOS
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  TOGGLE_COLOR: "tgColor",
  NEW_USER_INPUT: "newUserInput",
};

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    userInput: "",
  });

  return (
    <main
      className="App"
      style={{
        color: state.color ? "#fff" : "#fff952",
        backgroundColor: "black",
      }}
    >
      <h1>React Hooks</h1>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
      <br /> <br />
      <button onClick={() => dispatch({ type: ACTION.TOGGLE_COLOR })}>
        Change Color
      </button>
      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default UseReducerHook;
