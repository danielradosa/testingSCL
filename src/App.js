import "./styles.css";
import Posts from "./Posts";
import NewPost from "./components/newPost";

export default function App() {
  return (
    <div className="App">
      <h1>Social.INK</h1> <br /> <br />
      <h3>Latest Posts:</h3> <br /> <br />
      <NewPost />
      <Posts />
    </div>
  );
}
