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
          <h2 className="poppins-medium fs-3">Adicionar Transação</h2>
        </div>
        <div className="col-12 col-lg-6 offset-lg-3">
          <form
            className="d-flex flex-column align-items-start justify-content-center gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="title" className="poppins-regular">
              Nome
            </label>
            <input
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
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
            <label htmlFor="desc" className="poppins-regular">
              Descrição
            </label>
            <textarea
              className={`form-control  ${errors.desc ? "is-invalid" : ""}`}
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
            <label htmlFor="type" className="poppins-regular">
              Tipo de Transação
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="type"
              {...register("type", { required: true })}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saida</option>
            </select>
            <label htmlFor="amount" className="poppins-regular">
              Valor
            </label>
            <input
              className={`form-control  ${errors.amount ? "is-invalid" : ""}`}
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
              className="btn btn-success w-100 poppins-light p-2"
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
