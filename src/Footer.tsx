const Footer = () => {
  return (
    <footer className="bg-dark py-4 mt-5">
      <div className="container text-center">
        <div className="row gap-2">
          <div className="col-12">
            <span className="poppins-medium text-light">
              &copy; 2025 Money Flow. Todos os direitos reservados.
            </span>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-around">
              <span className="text-white text-decoration-none opacity-50">
                Contato
              </span>
              <span className="text-white text-decoration-none opacity-50">
                Política de Privacidade
              </span>
              <span className="text-white text-decoration-none opacity-50">
                Termos de Uso
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
