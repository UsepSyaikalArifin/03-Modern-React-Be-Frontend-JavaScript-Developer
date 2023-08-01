import { PropTypes } from "prop-types";

const TitleArticle = ({ title }) => {
  return <h1>{title}</h1>;
};

TitleArticle.propTypes = {
  title: PropTypes.string,
};

TitleArticle.defaultProps = {
  title: "Title",
};

export default TitleArticle;
