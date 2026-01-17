import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/home";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
