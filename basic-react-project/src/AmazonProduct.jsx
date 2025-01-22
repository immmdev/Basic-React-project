import AmazonDescription from "./AmazonDescription";
import AmazonPrice from "./AmazonPrice";
import "./AmazonProduct.css"

function AmazonProduct(){
    return(
        <div>
            <div className="header">
                <h5>Blockbuster Deals On computer Accesseroies | Shop Now</h5>
            </div>
            <div className="product-container">
                <div className="product">
                    <AmazonDescription Name="Logitech MX Master 3S" Features={["8,000 DPI","5 Programmable Button"]}/>
                    <AmazonPrice prevPrice=" $ 12,495" currentPrice="$ 8,999"/>
                </div>
                <div className="product">
                    <AmazonDescription Name="Apple Pencil (2nd Gen)" Features={["Intitive touch surface","Designed for iPad Pro"]}/>
                    <AmazonPrice prevPrice="$ 11,900" currentPrice="$ 9,199"/>
                </div>
                <div className="product">
                    <AmazonDescription Name="Zeb-Transformer" Features={["RGB lights","5 extra Functional Button"]}/>
                    <AmazonPrice prevPrice=" $ 1,595" currentPrice="$ 899"/>
                </div>
                <div className="product">
                    <AmazonDescription Name="Protonics wireless Mouse" Features={["Wireless Mouse 2.4 GHz","Optical Orientation"]}/>
                    <AmazonPrice prevPrice=" $599" currentPrice="$ 278"/>
                </div>
            </div>
        </div>
        )
}

export default AmazonProduct;