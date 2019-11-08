import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostForm />
        <hr />
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
