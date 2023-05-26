 
const Banner = () => {
  return (
    // <div className="banner"></div>

    <>

<div id="slideOnly"  className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("../../../assets/img/image1.jpg")} className="d-block w-100 c-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require("../../../assets/img/image2.jpg")} className="d-block w-100 c-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require("../../../assets/img/image3.jpg")} className="d-block w-100 c-image" alt="..."/>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Banner