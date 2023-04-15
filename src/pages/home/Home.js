import "./home.css";
import Slider from "../../components/Slider";

const Home = () => {
  const handleEnquiry = () => {};
  return (
    <div className="home-ct">
      <br />
      <Slider />
      <h2>Welcome to First Step Play School</h2>
      <div className="video">
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/9SuqqZJq-aI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <div>Do you have any query? Write to us:</div>
      <br />
      <a
        className="enq-btn"
        rel="noreferrer"
        target="_blank"
        href="https://forms.gle/WYebBnjinYCzmGyR7"
      >
        Submit Detail
      </a>
      <br />
      <br />
    </div>
  );
};

export default Home;
