import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function Buttons() {
  return (
    <>
    <div className="buttons">
      <button className="btn-email">
        <FontAwesomeIcon icon={faAt} />
        Email
      </button>

      <button className="btn-linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </button>
    </div>
    </>
  );
}