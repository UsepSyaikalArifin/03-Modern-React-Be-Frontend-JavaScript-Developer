import PropTypes from "prop-types";

const BlueButton = ({ onCustomClick, caption }) => {
  return <button onClickCapture={onCustomClick}>{caption}</button>;
};

BlueButton.propTypes = {
  onCustomClick: PropTypes.func,
  caption: PropTypes.string,
};

export default BlueButton;
