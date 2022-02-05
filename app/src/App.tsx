import "./App.css";
import { useResource } from "react-ketting";

function App() {
  const { loading, error, data } = useResource<any>("posts/1");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <article>
      <span style={{ backgroundColor: "green" }}>{data.id}</span>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </article>
  );
}

export default App;
