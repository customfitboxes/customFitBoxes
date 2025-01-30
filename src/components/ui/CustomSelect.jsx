// components/shared/select/CustomSelect.js

import Select from 'react-select';

const CustomSelect = ({ value, onChange, options, label, placeholder }) => {
  return (
    <div className="col-span-12 sm:col-span-6">
      <label className="text-sm sm:text-base">{label}</label>
      <Select
        required
        value={value ? { label: value, value: value } : null}
        onChange={(selectedOption) => onChange(selectedOption ? selectedOption.value : '')}
        options={options.map(option => ({
          label: option.name || option.label,
          value: option.name || option.value,
        }))}
        className="mt-2"
        placeholder={placeholder}
        noOptionsMessage={() => 'No options found'}
        styles={{
          control: (base) => ({
            ...base,
            height: 48,
            minHeight: 44,
            borderColor: '#ccc',
            borderRadius: '8px',
            padding: '0 10px',
            boxShadow: 'none',
            cursor: 'pointer',
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#1a4885' : state.isFocused ? '#f0f0f0' : null,
            color: state.isSelected ? 'white' : '#333',
            padding: '10px',
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: '#333',
          }),
        }}
      />
    </div>
  );
};

export default CustomSelect;
