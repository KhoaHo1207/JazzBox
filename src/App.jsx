import { Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import useGATracker from "./hooks/useGATracker";
function App() {
  useGATracker();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
