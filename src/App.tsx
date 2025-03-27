import TransactionProvider from "./Provider";
import Form from "./Crud/Form";
import List from "./Crud/List";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <TransactionProvider>
      <Form />
      <List />
    </TransactionProvider>
  );
};

export default App;
