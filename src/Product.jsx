import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
    let oldPrice = ["12,985", "11,999", "1,599", "799"];
    let newPrice = ["11,999", "9,999", "1,299", "499"];
    let description = [
        ["8,000 DPI", "5 Programmable buttons"],
        ["Intuitive surface", "Designed for IPad Pro"], 
        ["designed for ipad Pro", "intuitive surface"],
        ["wireless", "optical orientation"],
    ];
    return (
        <div>
            <div className="Product">
                <h4>{title}</h4>
                <p>{description[idx][0]}</p>
                <p>{description[idx][1]}</p>
                <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
            </div>
        </div>
    );
}

export default Product;