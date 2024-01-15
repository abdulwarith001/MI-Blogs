import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialMediaShare = ({ url, title }) => {
  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnWhatsapp = () => {
    const message = `${title}\n${url}`;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(shareUrl, "_blank");
  };


  const shareOnLinkedin = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <div className="social-media-share">
      {/* Open Graph Meta Tags */}
     

      <p>Pls support this page by sharing...</p>
      <div className="btnContainer">
        <button onClick={shareOnFacebook} className="btn">
          <FaFacebook />
          Facebook
        </button>
        <button onClick={shareOnTwitter} className="btn">
          <FaTwitter />
          Twitter
        </button>
        <button onClick={shareOnLinkedin} className="btn">
          <FaLinkedin />
          Linkedin
        </button>
        <button onClick={shareOnWhatsapp} className="btn">
          <FaWhatsapp />
          Whatsapp
        </button>
      </div>
      {/* Add more social media icons and functions as needed */}
    </div>
  );
};

export default SocialMediaShare;
