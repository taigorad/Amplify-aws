import {useContext} from "react"
import { Product } from "../../produnct.js";
import "./product.css";
import {context} from "../../App.js"
function Shop() {
  const number=useContext(context)

  function add(){
          number.setnumber(number.number+1)
  }


  console.log(Product);
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>Brand Shop</h1>
      </div>
      <div className="products">
        {Product.map((pro) => {
          return (
            <div className="image">
            <ul key={pro.id} className="ul_1">
            <li> 
                <img
                src={pro.productImage}
                  alt="produnct photo"
                />
              </li>
             <li> <b> Product name :</b> {pro.productName}</li>
              <li><b>produnct price :</b>  $ {pro.price} <button className="button1" onClick={add} >Buy</button></li>
             
              
            </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Shop;
