
import profile from "../assets/profile.jpg";

export default function header(){
    return(
        <>
        <header>
            <img className="image" src={profile} alt="head shot for company"/>
        </header>
        <h1>Alexander Aldilemi</h1>
        <h2>UX Engineer</h2>
        <h3>AlexAldilemi.website</h3>
        </>

    )
}