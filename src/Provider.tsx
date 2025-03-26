import { TransactionContext } from "./Context";
import transactionReducer from "./Crud/reducer";
import { useReducer } from "react";

const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(transactionReducer, []);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
