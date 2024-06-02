import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../darkmode/DarkmodeContext";
import { FormattedMessage } from "react-intl";
import "./centralProductSection.scss";



const CentralProductSection = () => {
  const navigate = useNavigate();
  const { mode } = useDarkMode();
  

  //navigating to the women categories on click
  const goToCategory = (category: string) => {
    navigate(`/plp/woman/${category}`, {
      state: { category },
    });
  };




  return (
    <div className={`central-product-sec-cont ${mode}`}>
      <h1 className={mode}>
        <FormattedMessage
          id="centralProductSecTitle"
          defaultMessage="The future belongs to women with style"
        />
      </h1>
      <h3>
        <FormattedMessage
          id="centralProductSecSubTitle"
          defaultMessage="Discover the new women's collection"
        />
      </h3>
      <div className="central-product-subcont">
        <div
          className="first-product-sec"
          onClick={() => goToCategory("shirt")} //passing the name of category to go to the correct route
        >
          <h2>Shirts</h2>
          <p>Shirts</p>
        </div>

        <div
          className="second-product-sec"
          onClick={() => goToCategory("pants")}
        >
          <h2>Pants</h2>
          <p>Pants</p>
        </div>

        <div
          onClick={() => goToCategory("shoes")}
          className="third-product-sec"
        >
          <h2>Shoes</h2>
          <p>Shoes</p>
        </div>
      </div>
    </div>
  );
};

export default CentralProductSection;
