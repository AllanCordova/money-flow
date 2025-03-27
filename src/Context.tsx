import { createContext } from "react";

type Transaction = {
  id: number;
  title: string;
  desc: string;
  type: string;
  amount: number;
};

type Action =
  | {
      type: "adicionar";
      payload: { title: string; desc: string; type: string; amount: number };
    }
  | { type: "remover"; payload: number }
  | { type: "limpar" }
  | { type: "editar"; payload: Transaction };

interface ContextType {
  state: Transaction[];
  dispatch: React.Dispatch<Action>;
}

export const TransactionContext = createContext<ContextType | null>(null);
