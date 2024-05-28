import { useDarkMode } from "../../darkmode/DarkmodeContext";
import Footer from "../../footer/Footer";
import "./discoverSection.scss";

const DiscroverSection: React.FC = ({ content, images, error }) => {
  const { mode } = useDarkMode();

  const video = content?.video?.fields?.file?.url || "";

  const p1 = content?.descriptionBrandAmbassador || "";
  const p2 = content?.descriptionPalazzoBiscari || "";
  const p3 = content?.descriptionshows || "";
  const p4 = content?.descriptionSustainability || "";
  const img1 = images[5]?.fields?.image.fields.file.url || "";
  const img2 = images[0]?.fields?.image.fields.file.url || "";
  const img3 = images[2]?.fields?.image.fields.file.url || "";
  const img4 = images[3]?.fields?.image.fields.file.url || "";
  const img5 = images[1]?.fields?.image.fields.file.url || "";

  return (
    <div className={`discover-cont ${mode}`}>
      <div className="discover-title">
        <h2>Etna Rouge Gallery 2024 </h2>
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
      <Footer />
    </div>
  );
};

export default DiscroverSection;
