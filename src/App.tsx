import TransactionProvider from "./Provider";
import Form from "./Crud/Form";
import List from "./Crud/List";

const App = () => {
  return (
    <TransactionProvider>
      <Form />
      <List />
    </TransactionProvider>
  );
};

export default App;
