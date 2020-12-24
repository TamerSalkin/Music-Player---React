import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Controls() {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon class="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon class="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon class="skip-forward" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
}

export default Controls;
