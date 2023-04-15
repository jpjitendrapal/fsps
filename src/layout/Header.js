import "./header_footer.css";
import { isMobile } from "../utility/utility";
const Header = () => {
  const handleWAClick = () => {
    window.location.href = "https://wa.me/919773510075";
    // "whatsapp://send?text=Hey Look what I found about FSPS";
  };
  return (
    <header>
      <section className="icon-ct">
        <img className="icon" src="./images/compress-icon.jpg" alt="FSPS" />
      </section>
      {isMobile ? (
        <div>
          <section className="title">First Step Play School</section>
          <section className="phone" onClick={handleWAClick}>
            Contact: 9773510075
            <img
              className="icon-wa"
              src="./images/icons/whatsapp.png"
              alt="wa"
            />
          </section>
        </div>
      ) : (
        <>
          <section className="title">
            Welcome to First Step Play School & Day Care
          </section>
          <section className="phone">
            Contact: 9773510075
            <img
              className="icon-wa"
              src="./images/icons/whatsapp.png"
              alt="wa"
            />
          </section>
        </>
      )}
    </header>
  );
};
export default Header;
