
import { Link } from "react-router-dom";
import { useDarkMode } from "../../darkmode/DarkmodeContext";


import "./discoverSection.scss";

const DiscoverSection: React.FC = ({ content, images, error }) => {
  const { mode } = useDarkMode();

  const video = content?.video?.fields?.file?.url || "";
  const img2 = content?.image?.fields?.file?.url || "";
  const p1 = content?.descriptionBrandAmbassador || "";
  const p2 = content?.descriptionPalazzoBiscari || "";
  const p3 = content?.descriptionshows || "";
  const p4 = content?.descriptionSustainability || "";

  const img1 = images[4]?.fields?.image.fields.file.url || "";
  /*   const img2 = images[0]?.fields?.image.fields.file.url || ""; */
  const img3 = images[2]?.fields?.image.fields.file.url || "";
  const img4 = images[3]?.fields?.image.fields.file.url || "";
  const img5 = images[1]?.fields?.image.fields.file.url || "";

  console.log(content);

  return (
    <div className={`discover-cont ${mode}`}>
      <div className="discover-title">
        <span>
          <Link to="/">
            <svg className={mode}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
            </svg>
          </Link>
          <h2>Etna Rouge Gallery 2024 </h2>
        </span>

        <div className="scroll-text-cont">
          <p>Etna Rouge News</p>
          <p>Etna Rouge News</p>
          <p>Etna Rouge News</p>
          <p>Etna Rouge News</p>
          <p>Etna Rouge News</p>
          <p>Etna Rouge News</p>
        </div>
      </div>

      <video src={video} loop muted autoPlay></video>

      <div className="discover-subCont">
        <div>
          <img src={img1} alt="Caroline Daves" />

          <p className="first-paragraph">{p1}</p>
        </div>
        <div className="discover-extended-cont">
          <img src={img2} alt="palazzo Biscari"></img>
          <p className="second-paragraph">{p2}</p>
        </div>
        <div>
          <img src={img4} alt="models" />
          <p className="third-paragraph">{p3}</p>
          <img src={img3} alt="models" />
        </div>

        <div className="sustainability">
          <img src={img5} alt="sustainability" />
          <p className="fourth-paragraph">{p4}</p>
        </div>
      </div>
      {/*       <Footer /> */}
    </div>
  );
};

export default DiscoverSection;
