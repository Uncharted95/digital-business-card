import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-solid-svg-icons";


export default function Icons(){
    return(
        <>
        <FontAwesomeIcon icon={faSquareGithub} className="icon-Github"/>
        <FontAwesomeIcon icon={faSquareInstagram} className="icon-Instagram"/>
        <FontAwesomeIcon icon={faSquareFacebook} className="icon-Facebook"/>
        <FontAwesomeIcon icon={faSquareTwitter} className="icon-Twitter"/>
        </>
    )
}