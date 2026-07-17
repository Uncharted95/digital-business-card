import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Icons(){
    return(
        <>
        <FontAwesomeIcon icon={faSquareGithub} className="icon-Github"/>
        <FontAwesomeIcon icon={faSquareInstagram} className="icon-Instagram"/>
        <FontAwesomeIcon icon={faSquareFacebook} className="icon-Facebook"/>
        <FontAwesomeIcon icon={faSquareXTwitter} className="icon-Twitter"/>
        </>
    )
}