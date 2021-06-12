import React from "react";
import { Link } from "react-router-dom";
import albumArt from "./images/default-song-image.png";
function Details() {
 return (
  <main className="details">
   <div className="header">
    <h2>
     Step 1: <b>Enter Album details</b>
    </h2>
   </div>
   <form>
    <div className="main-album-info">
     <div className="album-art">
      <img src={albumArt} alt="Album Art" />
     </div>
     <div className="lower-album-info">
      <div className="artist-info">
       <label htmlFor="">Artist</label>
       <input type="text" />
      </div>
      <div className="album-info">
       <label htmlFor="">Album Name</label>
       <input type="text" />
      </div>
      <div className="genre-info">
       <label htmlFor="">Genre</label>
       <input type="text" />
      </div>
     </div>
    </div>
    <div className="secondary-album-info">
     <div className="subgenre">
      <label htmlFor="Subgenres">Subgenres</label>
      <input type="text" name="Subgenres" />
     </div>
     <div className="mood">
      <label htmlFor="moods">Moods</label>
      <input type="text" name="moods" />
     </div>
     <div className="explicit">
      <label htmlFor="Explicit">Explicit</label>
      <input type="text" name="Explicit" />
     </div>
    </div>
    <div className="tertiary-album-info">
     <p className="suggetion-tag">
      Want to <span className="suggest">suggest a new tag?</span>
     </p>
     <div className="album-desc">
      <label htmlFor="album-desc">Add Description</label>
      <textarea name="album-desc"></textarea>
     </div>
    </div>
   </form>
   <footer>
    <div className="fixedBtn">
     <Link to="/add">
      <button>
       Next Step <i className="fas fa-arrow-right"></i>
      </button>
     </Link>
    </div>
   </footer>
  </main>
 );
}
export default Details;
