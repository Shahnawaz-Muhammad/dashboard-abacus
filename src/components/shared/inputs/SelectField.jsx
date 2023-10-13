import PropTypes from 'prop-types';

const SelectField = ({ label, id, options, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5"
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectField;