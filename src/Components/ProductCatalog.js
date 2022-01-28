 let ProductCatalog=(props)=>{

    return(
        <div>
            <div>
                <img src={props.propObj.imgSource} width="25%"></img>
                <button>Enroll Now</button>
                <h4>Rating :{props.propObj.rating} </h4>
            </div>
        </div>
    )
}
export default ProductCatalog;
