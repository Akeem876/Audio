import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
 return (
  <main className="add">
   <div className="header">
    <h2>
     Step 2: <b>Upload Your Album </b>
    </h2>
   </div>
   <div className="browse-file-area">
    <div className="browse-file-header">
     <h6>Browse for files or drag and drop them here</h6>
     <button className="browse">
      <span className="browse-icon">+</span>Browse your files
     </button>
    </div>
    <div className="browse-file-desc">
     <p className="top-desc">
      Accepted file types are Zip, MP3, FLAC, WAV, AIFF, OGG, & M4A. Limit of
      250MB per file.
     </p>
     <p className="top-desc">
      Uploading constitutes your acceptance of our
      <span className="desc-gold">Terms of Service </span>and
      <span className="desc-gold">Privacy Policy</span>. Uploading music is
      reserved for Artists, DJs, and Labels. Audiomack is not for storing or
      sharing your personal music collection or files. DO NOT upload any content
      which infringes on the rights of 3rd parties. Users who upload 3rd party
      content will be banned from Audiomack immediately.
     </p>
    </div>
   </div>
   <footer>
    <div className="add-fixedBtn">
     <Link to="/details">
      <button className="backBtn">back</button>
     </Link>
     <Link to="/edit">
      <button>
       Next Step <i className="fas fa-arrow-right"></i>
      </button>
     </Link>
    </div>
   </footer>
  </main>
 );
};
export default Add;
