import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="cs_footer cs_style_1 cs_accent_bg">
      <div className="container cs_white_color">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_footer_text_widget">
                <img
                  src="https://www.rehabana.com/wp-content/uploads/2025/07/Logo_Footer.png"
                  alt="Logo"
                  style={{
                    height: "100px",
                    width: "auto",
                  }}
                />
                <p>
                  Far far away, behind the word bore et dolore magna aliqua. Ut
                  enim ad on minim veniam, quis nostrud
                </p>
              </div>
              <div className="cs_social_btns cs_style_1">
                <a href="#" className="cs_center" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="cs_center" aria-label="X (Twitter)">
                  <FaXTwitter />
                </a>
                <a href="#" className="cs_center" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="cs_center" aria-label="Pinterest">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                Links
              </h2>
              <ul className="cs_footer_widget_menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="#">Refund</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                Resources
              </h2>
              <ul className="cs_footer_widget_menu">
                <li>
                  <a href="#">Demos</a>
                </li>
                <li>
                  <a href="#">Instructions</a>
                </li>
                <li>
                  <a href="#">Personal Meeting</a>
                </li>
                <li>
                  <a href="doctors.html">Doctor List</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                Office
              </h2>
              <ul className="cs_footer_widget_menu cs_address">
                <li>America- 66 Brooklyn golden street 600 New York. USA</li>
                <li className="cs_fs_32 cs_bold cs_phone_number">
                  <div className="cs_height_20 cs_height_lg_20" />
                  <a href="tel:+444547800112">+1 (212) 621-5896</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_copyright mb-0">
              medixal© 2024. All Rights Reserved.
            </p>
            <ul className="cs_footer_widget_menu">
              <li>
                <a href="#">Privacy &amp; Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
