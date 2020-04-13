/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SeachBar and add them to the App
import PostPage from "./components/PostsContainer/PostsPage"

import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBarContainer";

const App = () => { 
  const [data] = useState(dummyData);
  return (
    <div className="App">
      <SearchBar/>
      <PostPage postData={data}/>
    </div>
  );
};

export default App;