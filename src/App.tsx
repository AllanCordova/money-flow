import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionProvider from "./Provider";
import Form from "./Crud/Form";
import List from "./Crud/List";
import Register from "./Login/Register";
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
            <Route path="/Register" element={<Register />} />
          </Routes>
        </TransactionProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
