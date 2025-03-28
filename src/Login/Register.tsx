import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { TransactionContext } from "../Context";
import { FaGoogle, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

type Input = {
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const [isSuccess, setSuccess] = useState<boolean | null>(null);

  const context = useContext(TransactionContext);
  if (!context) return null;

  const { setUser } = context;

  const onSubmit = (data: Input) => {
    if (data) {
      setUser((prevUsers) => [...prevUsers, data]);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      reset();
    }
  };

  return (
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="text-white poppins-medium fs-3">Criar Conta</h2>
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
                Crie uma Senha!
              </span>
            )}
            <button
              type="submit"
              className="btn btn-secondary w-100 poppins-regular"
            >
              Cadastrar
            </button>
            {isSuccess && (
              <span
                className={`alert alert-secondary alert-dismissible fade show w-100`}
                role="alert"
              >
                Parabéns, conta criada com sucesso!
              </span>
            )}
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-lg-6 offset-lg-3">
          <div>
            <h5 className="text-white">Ou faça login com</h5>
            <div className="d-flex flex-column gap-2 justify-content-center mt-3">
              <button className="btn btn-light poppins-medium">
                <FaGoogle className="me-2" />
                Google
              </button>
              <button className="btn btn-primary">
                <FaFacebook className="me-2" />
                Facebook
              </button>
              <button className="btn btn-info">
                <FaTwitter className="me-2" />
                Twitter
              </button>
              <button className="btn btn-dark">
                <FaGithub className="me-2" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
