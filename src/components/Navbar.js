import "../styles/navbar.css";
import { Image } from "cloudinary-react";
function Navbar() {
  return (
    <div className="container">
      <div class="appjs-image-with-text">
        <Image
          cloudName="pastorcoder"
          publicId="real-estate-ccg-2023/covenant community group logo 2.png"
          className="nav-ccg-logo"
          alt="logo"
        />
        {/** <p className="text-2xl font-bold ml-4">
          Real Estate and Allied Services Covenant Community Group
        </p> */}
      </div>

      {/**<div style={{marginBottom: "30px"}}>.</div> */}
    </div>
  );
}

export default Navbar;
