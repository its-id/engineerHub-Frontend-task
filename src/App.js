import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/Layout";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeLayout />} />
          <Route exact path="/:component" element={<HomeLayout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
