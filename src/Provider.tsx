import { TransactionContext } from "./Context";
import transactionReducer from "./Crud/reducer";
import { useReducer, useState } from "react";

const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(transactionReducer, [
    {
      id: 0,
      title: "Compras",
      desc: "Lanches e Refeições de sexta",
      amount: 3450,
      type: "Saída",
    },
  ]);
  const [users, setUser] = useState([
    { email: "", password: "", name: "", log: false },
  ]);

  return (
    <TransactionContext.Provider value={{ state, dispatch, users, setUser }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
