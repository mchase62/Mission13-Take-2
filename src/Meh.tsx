import React from "react";
import styles from "./Meh.module.css";

function TopBanner() {
  // just the main page
  return (
    <div className="row">
      <div>
        <br></br>
      </div>
      <div className="col align-self-center">
        <h1 className={styles.h1}>Joel Hilton Movie Site</h1>
      </div>{" "}
      <div>
        <br></br>
      </div>
      <div>
        <img src="./JoelHiltonHeadshot (1).jpg" alt="ownersFace"></img>
        <br></br>
        <p>
          Here you can see all the Movies Joel has collected and his podcast.
        </p>
      </div>
    </div>
  );
}

export default TopBanner;
