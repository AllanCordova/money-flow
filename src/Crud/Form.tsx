import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TransactionContext } from "../Context";

type Input = {
  title: string;
  desc: string;
  type: string;
  amount: number;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();
  const context = useContext(TransactionContext);

  const onSubmit = (data: Input) => {
    context?.dispatch({
      type: "adicionar",
      payload: {
        title: data.title,
        desc: data.desc,
        type: data.type,
        amount: data.amount,
      },
    });
    reset();
  };

  return (
    <div className="container text-center">
      <div className="row d-flex flex-column gap-2 mt-4">
        <div className="col-12">
          <h2 className="poppins-medium text-white fs-3">
            Adicionar Transação
          </h2>
        </div>
        <div className="col-12 col-lg-6 offset-lg-3">
          <form
            className="d-flex flex-column align-items-start justify-content-center gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="title" className="poppins-regular text-white">
              Nome
            </label>
            <input
              className={`input ${errors.title ? "is-invalid" : ""}`}
              type="text"
              placeholder="Presente"
              id="title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="invalid-feedback poppins-regular">
                A transação precisa de um nome
              </span>
            )}
            <label htmlFor="desc" className="poppins-regular text-white">
              Descrição
            </label>
            <textarea
              className={`input ${errors.desc ? "is-invalid" : ""}`}
              placeholder="Ganho de 5000, para a viagem"
              id="desc"
              rows={2}
              {...register("desc", { required: true })}
            />
            {errors.desc && (
              <span className="invalid-feedback poppins-regular">
                A transação precisa de uma descrição
              </span>
            )}
            <label htmlFor="type" className="poppins-regular text-white">
              Tipo de Transação
            </label>
            <select
              className="input"
              aria-label="Default select example"
              id="type"
              {...register("type", { required: true })}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saida</option>
            </select>
            <label htmlFor="amount" className="poppins-regular text-white">
              Valor
            </label>
            <input
              className={`input ${errors.amount ? "is-invalid" : ""}`}
              type="number"
              placeholder="5000"
              id="amount"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <span className="invalid-feedback poppins-regular">
                A transação precisa de um Valor
              </span>
            )}
            <button
              className="btn btn-secondary w-100 poppins-regular p-2"
              type="submit"
            >
              salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
