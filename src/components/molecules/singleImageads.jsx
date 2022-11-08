import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleImageAds(props) {
  const { imageView, goTo } = props;
  return (
    <div className="singleAds">
      <Link to={goTo}>
        <Image src={imageView} fluid />
      </Link>
    </div>
  );
}

export default SingleImageAds;
