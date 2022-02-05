import "./App.css";
import { useResource } from "react-ketting";

function App() {
  const { loading, error, data } = useResource<any>("/users");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;
  return (
    <article>
      {data.map((user: any) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.group}</p>
            <p>{user.permission}</p>
          </div>
        );
      })}
      <span style={{ backgroundColor: "green" }}>{data.id}</span>
    </article>
  );
}

export default App;
