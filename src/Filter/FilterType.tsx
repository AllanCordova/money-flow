import { TransactionContext } from "../Context";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

type Input = {
  type: string;
};

type Transaction = {
  id: number;
  title: string;
  desc: string;
  type: string;
  amount: number;
};

const FilterType = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Input>();

  const [stateFilter, setStateFilter] = useState<Transaction[]>([]);

  const context = useContext(TransactionContext);
  if (!context) return null;

  const { state } = context;

  const onSubmit = (data: Input) => {
    if (data.type === "default") {
      setError("type", { message: "Selecione um Filtro!" });
      return;
    }

    const filtered = state.filter((tr) => tr.type === data.type);

    if (filtered.length === 0) {
      setError("type", {
        message: "Nenhum valor encontrado para esse filtro!",
      });
    }

    setStateFilter(filtered);
  };

  return (
    <div className="container text-center">
      <div className="row gap-3">
        <div className="col-12 col-lg-6 offset-lg-3">
          <form
            className="d-flex flex-column gap-2 align-items-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="poppins-regular text-white" htmlFor="type">
              Selecione um tipo
            </label>
            <select
              className="input"
              aria-label="Default select example"
              id="type"
              {...register("type")}
            >
              <option value="default" defaultChecked>
                Tipo
              </option>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
            <button className="btn btn-success w-100" type="submit">
              Buscar
            </button>
            {errors.type && (
              <span className="text-danger">{errors.type.message}</span>
            )}
          </form>
        </div>
        <div className="col-12 col-lg-6 offset-lg-3">
          <ul className="list-group">
            {stateFilter.map((tr) => (
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
                </div>
                <span className="poppins-light text-white">
                  Descrição: {tr.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterType;
