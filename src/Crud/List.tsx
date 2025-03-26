import { useContext } from "react";
import { TransactionContext } from "../Context";

const List = () => {
  const context = useContext(TransactionContext);
  if (!context) return;

  const { state } = context;

  return (
    <div>
      <ul>
        {state.map((tr) => (
          <li key={tr.id}>
            <strong>{tr.title}</strong>
            <span>{tr.desc}</span>
            <span>{tr.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
