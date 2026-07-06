import "./Product.css";
import Price from "./Price";

function Product({title}){
    return (
        <div>
            <div className="Product">
                <h4>{title}</h4>
                <p>Description</p>
                <Price/>
            </div>
        </div>
    );
}

export default Product;