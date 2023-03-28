import "./admin.css";
import { useState } from "react";
function Admin() {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    function handleTextChange(e){
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }
    function handleCouponTextChange(e){
      const value = e.target.value;
      const name = e.target.name;

      let copy = {...coupon};
      copy[name] = value;
      setCoupon(copy);
    }
    function saveProduct(){
        console.log(product);
    }
    function saveCoupon(){
      console.log(coupon);
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
          <form>
            <div className="mb-3">
              <label className="form-label">Code</label>
              <input name="code" onChange={handleCouponTextChange} type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Discount</label>
              <input name="discount" onChange={handleCouponTextChange} type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <button type="button" onClick={saveCoupon} className="btn btn-info">Save product</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Admin;
