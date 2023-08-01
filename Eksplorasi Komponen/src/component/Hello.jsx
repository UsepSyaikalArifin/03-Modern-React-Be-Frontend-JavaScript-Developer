import PropTypes from "prop-types";

const Hello = ({ props, gretting }) => {
  return (
    <div className="text-xl">
      Hello {props} {gretting}
    </div>
  );
};

Hello.propTypes = {
  props: PropTypes.string,
  gretting: PropTypes.string,
};

Hello.defaultProps = {
  props: "anonim",
  gretting: "",
};

export default Hello;
