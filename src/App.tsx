import './App.css'
// import {Posts} from "./components/post-component/Posts.tsx";
import {Todos} from "./components/todo-component/Todos.tsx";
import {Comments} from "./components/comments-component/Comments.tsx";

function App() {

  return (
    <div>
        {/*<Posts />*/}
        <Todos />
        <Comments />
    </div>
  )
}

export default App
