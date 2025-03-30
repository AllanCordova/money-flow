import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionProvider from "./Provider";
import Form from "./Crud/Form";
import List from "./Crud/List";
import FilterList from "./Filter/FilterList";
import Register from "./Login/Register";
import Login from "./Login/Login";
import NavBar from "./NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/money-flow">
        <TransactionProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/list" element={<List />} />
            <Route path="/Filter" element={<FilterList />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </TransactionProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
