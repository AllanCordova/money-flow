import { useContext } from "react";
import { TransactionContext } from "../Context";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Input = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<Input>();

  const navigate = useNavigate();

  const context = useContext(TransactionContext);
  if (!context) return null;

  const { users, setUser } = context;

  const onSubmit = (data: Input) => {
    const userIndex = users.findIndex(
      (user) => user.email === data.email && user.password === data.password
    );

    if (userIndex !== -1) {
      setUser((prevUsers) =>
        prevUsers.map((user, index) =>
          index === userIndex ? { ...user, log: true } : user
        )
      );
      reset();
      return navigate("/");
    }

    setError("root", { message: "Senha ou E-mail Inválido" });
  };

  return (
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="poppins-medium text-white fs-3 m-0">Fazer Login</h2>
        </div>
        <div className="col-12 col-lg-6 offset-lg-3">
          <form
            className="d-flex flex-column align-items-start gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-white poppins-regular" htmlFor="email">
              Email:
            </label>
            <input
              className="input"
              placeholder="lua@gmail.com"
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger poppins-regular">
                Digite um e-mail
              </span>
            )}
            <label className="text-white poppins-regular" htmlFor="password">
              Senha:
            </label>
            <input
              className="input"
              type="password"
              placeholder="typeSenha@Exemplo"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger poppins-regular">
                Digite uma Senha
              </span>
            )}
            {errors.root && (
              <span className="text-danger poppins-regular">
                {errors.root.message}
              </span>
            )}
            <button
              type="submit"
              className="btn btn-success w-100 poppins-regular"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
