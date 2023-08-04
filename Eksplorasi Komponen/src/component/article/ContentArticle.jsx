import { PropTypes } from "prop-types";

const ContentArticle = ({ dataLogin, children }) => {
  return (
    <div className="text-justify">
      {children}
      <p className="text-blue-500">{dataLogin}</p>
    </div>
  );
};

ContentArticle.propTypes = {
  dataLogin: PropTypes.string,
  children: PropTypes.array,
};

ContentArticle.defaultProps = {
  dataLogin: "",
  children: "",
};

export default ContentArticle;
