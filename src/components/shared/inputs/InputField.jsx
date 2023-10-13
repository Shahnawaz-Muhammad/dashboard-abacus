
import PropTypes from 'prop-types';

const InputField = ({ label, name, id, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-md font-normal leading-6 text-white"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={name}
          id={id}
          className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
          {...rest} // Spread the additional props to the input element
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    // You can add PropTypes for any additional props you pass
  };

export default InputField;
