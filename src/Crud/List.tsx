import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TransactionContext } from "../Context";

type Input = {
  title: string;
  desc: string;
  amount: number;
};

const List = () => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  const { register, handleSubmit, reset } = useForm<Input>();

  const context = useContext(TransactionContext);
  if (!context) return;

  const { state, dispatch } = context;

  const onSubmit = (data: Input) => {
    const newTransaction = { ...data, id: id };
    dispatch({ type: "editar", payload: newTransaction });
    reset();
    setEdit((e) => !e);
  };

  const edit = (id: number) => {
    setEdit((e) => !e);
    setId(id);
  };

  return (
    <div>
      <ul>
        {state.map((tr) => (
          <li key={tr.id}>
            <strong>{tr.title}</strong>
            <span>{tr.desc}</span>
            <span>{tr.amount}</span>
            <button onClick={() => edit(tr.id)}>Edit</button>
            <button
              onClick={() => dispatch({ type: "remover", payload: tr.id })}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      {isEdit && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="nome"
            {...register("title", { required: true })}
          />
          <input
            type="text"
            placeholder="descrição"
            {...register("desc", { required: true })}
          />
          <input
            type="text"
            placeholder="valor"
            {...register("amount", { required: true })}
          />
          <button type="submit">salvar</button>
        </form>
      )}
    </div>
  );
};

export default List;
