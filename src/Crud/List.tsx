import { useContext, useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { TransactionContext } from "../Context";
import { useNavigate } from "react-router-dom";

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

  const state = useMemo(() => context?.state ?? [], [context?.state]);
  const dispatch = useMemo(
    () => context?.dispatch ?? (() => {}),
    [context?.dispatch]
  );

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

  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <div className="row gap-5 mt-5">
        <div className="col-12 col-lg-6 offset-lg-3">
          <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              <i className="bi bi-arrow-left"></i>
            </button>
            <h2 className="poppins-medium text-white fs-3 m-0">Transações</h2>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/Filter")}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 offset-lg-3">
          <ul className="list-group">
            {state.map((tr) => (
              <li
                className="list d-flex flex-column gap-2 align-items-start justify-content-center"
                key={tr.id}
              >
                <span
                  className={`${
                    tr.type === "Entrada" ? "text-success" : "text-danger"
                  } poppins-regular`}
                >
                  {tr.type}
                </span>
                <div className="d-flex align-items-center gap-2 w-100">
                  <div className="d-flex align-items-center gap-2 w-100">
                    <strong className="poppins-light text-white">
                      Nome: {tr.title}
                    </strong>
                    <span
                      className={`${
                        tr.type === "Entrada" ? "text-success" : "text-danger"
                      } text-white poppins-light`}
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
                <span className="poppins-light text-white">
                  Descrição: {tr.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Modal de Edção */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header d-flex justify-content-between">
              <h1
                className="modal-title text-white fs-5"
                id="exampleModalLabel"
              >
                Editar Transação
              </h1>
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setId(null)}
              >
                <i className="bi bi-x-circle fs-5"></i>
              </button>
            </div>
            <div className="modal-body">
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
                  id="amount"
                  {...register("amount", { required: true })}
                />
                {errors.amount && (
                  <span className="invalid-feedback poppins-regular">
                    A transação precisa de um Valor
                  </span>
                )}

                <button
                  className="btn btn-secondary w-100 poppins-light p-2"
                  type="submit"
                  data-bs-dismiss="modal"
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
