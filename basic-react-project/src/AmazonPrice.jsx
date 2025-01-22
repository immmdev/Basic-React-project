import "./AmazonPrice.css"
function AmazonPrice({prevPrice,currentPrice}){
    return(
        <div className="price" style={ {backgroundColor: "yellow"}}>
            <div className="both-price">
                <div className="prev-price"><p style={{ textDecoration: 'line-through' }}>{prevPrice}</p></div>
                <div className="current-price"><p><b>{currentPrice}</b></p></div>
            </div>
        </div>
    )
}

export default AmazonPrice;