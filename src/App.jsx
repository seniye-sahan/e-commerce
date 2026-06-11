import { useSelector } from "react-redux";
function App() {
  const state = useSelector(state => state);

  console.log("REDUX STATE:", state);

  return (
    <div>
      <h1>Redux Test</h1>
    </div>
  );
}
export default App;