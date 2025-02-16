import profilePic from "./assets/pexels-efrem-efre-2786187-30442348.jpg"
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile picture"></img>
            <h2 className="card-title">Go Prakritik</h2>
            <p className="card-text">Here we sell Organic products and many more</p>
        </div>
    )
}
export default Card;