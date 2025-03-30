import FilterType from "./FilterType";
import { useNavigate } from "react-router-dom";

const FilterList = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center">
      <div className="row mt-5 gap-5">
        <div className="col-12 col-lg-6 offset-lg-3">
          <div className="d-flex align-items-center justify-content-between">
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/List")}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <h2 className="poppins-medium text-white fs-3 m-0">
              Transações Filtradas
            </h2>
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="col-12">
          <FilterType />
        </div>
      </div>
    </div>
  );
};

export default FilterList;
