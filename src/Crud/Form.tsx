import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TransactionContext } from "../Context";

type Input = {
  title: string;
  desc: string;
  amount: number;
};

const Form = () => {
  const { register, handleSubmit, reset } = useForm<Input>();
  const context = useContext(TransactionContext);

  const onSubmit = (data: Input) => {
    context?.dispatch({
      type: "adicionar",
      payload: { title: data.title, desc: data.desc, amount: data.amount },
    });
    reset();
  };

  return (
    <div>
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
    </div>
  );
};

export default Form;
