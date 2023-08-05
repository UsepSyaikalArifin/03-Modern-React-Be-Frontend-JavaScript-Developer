import PropTypes from "prop-types";

const InputText = ({ label, value, onChange }) => {
  return (
    <label>
      {label} : <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
