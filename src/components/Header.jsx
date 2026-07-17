
import profile from "../assets/profile.jpg";

export default function header(){
    return(
        <>
        <header>
            <img className="image" src={profile} alt="head shot for company"/>
        <h1>Alexander Aldilemi</h1>
        <h2>UX Engineer</h2>
        <p>AlexAldilemi.website</p>
        </header>
        </>

    )
}