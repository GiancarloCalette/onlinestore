import "./admin.css";
import { useState } from "react";
function Admin() {
    const [product, setProduct] = useState({});
    function handleTextChange(e){
        const value = e.target.value;
        const name = e.target.name;

        product[name] = value;
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }
    function saveProduct(){
        console.log(product);
    }
    return (
    <div className="admin">
      <h1>Manage Store</h1>
      <main>
        <section id="products">
          <h5>Products</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input name="title" onChange={handleTextChange} type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input name="category" onChange={handleTextChange} type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Image name</label>
              <input name="image" onChange={handleTextChange} type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input name="price" onChange={handleTextChange} type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <button type="button" onClick={saveProduct} className="btn btn-info">Save product</button>
            </div>
          </form>
        </section>

        <section id="coupons">
          <h5>Coupon codes</h5>
        </section>
      </main>
    </div>
  );
}

export default Admin;
