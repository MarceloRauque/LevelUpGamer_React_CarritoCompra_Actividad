import { useParams } from "react-router-dom";
import { products } from "../data/products";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pid = Number(id);
  const product = products.find((p) => p.id === pid);
  return (
    <>
      <main className="container mt-5">
        <div className="row g-4">

      <div className="col-12 col-lg-6">
        <div className="card border-0">

          <div className="ratio ratio-16x9 bg-body-secondary rounded">
            <img
              src={product?.imageSrc}
              alt="Notebook"
              className="w-100 h-100 object-fit-contain rounded"
            />
          </div>
          
        </div>
      </div>

      <div className="col-12 col-lg-6">
        <div className="d-flex align-items-center justify-content-between">
          <span className="text-uppercase small text-secondary">{product?.category}</span>
          <span className="small text-secondary">Codigo: {product?.id}</span>
        </div>

        <h1 className="h3 mt-1">
          {product?.title}
        </h1>

        <hr className="my-3"/>

        <div className="d-flex justify-content-start gap-3">
          <div className="price-now">$ {product?.price}</div>
        </div>

        <div className="buy-cta mt-3">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="small text-secondary">Cantidad</span>
            <div className="input-group" style={{width: "140px"}}>
              <button className="btn btn-outline-secondary" type="button"><i className="bi bi-dash"></i></button>
              <input type="number" className="form-control text-center" value="1" min="1" max="5" />
              <button className="btn btn-outline-secondary" type="button"><i className="bi bi-plus"></i></button>
            </div>
            <span className="small text-secondary">Máximo 5 unidades.</span>
          </div>

          <button className="btn btn-dark btn-lg w-50">
            <i className="bi bi-cart-plus me-2"></i> Agregar al Carro
          </button>
        </div>

      </div>
    </div>


    <div className="row g-1 mt-lg-5">
      <div className="col-12 col-lg-12">
        <div className="card-2">
          <div className="card-body ms-4" style={{minHeight: "15vh"}}>
            <h3 className="mt-1">Descripción</h3>
            <p className="mt-3">
              {product?.description}
            </p>
          </div>
        </div>
        
      </div>
     
    </div>

  </main>
    </>
  );
};
