import "./AmazonDescription.css";
function AmazonDescription({Name,Features}){
    return(
        <div className="product-description">
            <div className="title"><h4>{Name}</h4></div>
            <div className="features">
                <ul>
                    {Features && Features.length > 0 ?(
                        Features.map((feature)=>(
                            <li>{feature}</li>
                        ))
                    ): (
                        <li>No features Available</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default AmazonDescription;


{/* <ul>
{features && features.length > 0 ? (
    features.map((feature, index) => (
        <li key={index}>{feature}</li>
    ))
) : (
    <li>No features available</li>
)}
</ul> */}