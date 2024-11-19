import { useFetch } from "./api";
import "./App.css";
import { Card } from "./components";
function App() {
  const { data, error, loading } = useFetch();
  if (loading) return <div>...loading</div>;
  if (error && !loading) return <div>somthing went wrong</div>;
  if (data && !error && !loading)
    return (
      <>
        {data.map((d) => (
          <Card key={d.id} {...d} />
        ))}
      </>
    );
}

export default App;
