import { products } from "./data";

function Products() {
  return (
    <div className="Products">
      <h1>Products</h1>
      <p>
        This is the products page.
      </p>
      <div className="product-container">
        <div className="product-list">



          {
            products.map(function (item, index) {
              return (
                <div className="product-list_item">
                  <div className="product-name">{item.name}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Products;
