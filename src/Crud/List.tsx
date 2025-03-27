import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TransactionContext } from "../Context";

type Input = {
  title: string;
  desc: string;
  type: string;
  amount: number;
};

const List = () => {
  const [id, setId] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const context = useContext(TransactionContext);
  if (!context) return null;

  const { state, dispatch } = context;

  // Sempre que o id mudar, preencher os inputs com os dados da transação
  useEffect(() => {
    if (id !== null) {
      const transaction = state.find((tr) => tr.id === id);
      if (transaction) {
        reset(transaction);
      }
    }
  }, [id, state, reset]);

  const onSubmit = (data: Input) => {
    if (id !== null) {
      const newTransaction = { ...data, id };
      dispatch({ type: "editar", payload: newTransaction });
    }
    reset();
    setId(null);
  };

  return (
    <div className="container text-center">
      <div className="row gap-2 mt-3">
        <div className="col-12">
          <h2 className="poppins-medium fs-3">Transações</h2>
        </div>
        <div className="col-12 col-lg-6 offset-lg-3">
          <ul className="list-group">
            {state.map((tr) => (
              <li
                className="list-group-item d-flex flex-column gap-2 align-items-start justify-content-center"
                key={tr.id}
              >
                <span
                  className={`${
                    tr.type === "Entrada" ? "text-success" : "text-danger"
                  } poppins-regular`}
                >
                  {tr.type}
                </span>
                <div className="d-flex align-items-center w-100">
                  <div className="d-flex gap-2 w-100">
                    <strong className="poppins-light">Nome: {tr.title}</strong>
                    <span
                      className={`${
                        tr.type === "Entrada" ? "text-success" : "text-danger"
                      }`}
                    >
                      Valor: {tr.amount}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setId(tr.id)}
                  >
                    <i className="bi bi-pen"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch({ type: "remover", payload: tr.id })
                    }
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
                <span className="poppins-light">Descrição: {tr.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Editar Transação
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setId(null)}
              ></button>
            </div>
            <div className="modal-body">
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
                  className={`form-control ${errors.desc ? "is-invalid" : ""}`}
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
                  {...register("type", { required: true })}
                >
                  <option value="Entrada">Entrada</option>
                  <option value="Saída">Saida</option>
                </select>
                <label htmlFor="amount" className="poppins-regular">
                  Valor
                </label>
                <input
                  className={`form-control ${
                    errors.amount ? "is-invalid" : ""
                  }`}
                  type="number"
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
                  Salvar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
