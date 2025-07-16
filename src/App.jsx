import { Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Event from "./pages/Event";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="event" element={<Event />} />
      </Route>
    </Routes>
  );
}

export default App;
