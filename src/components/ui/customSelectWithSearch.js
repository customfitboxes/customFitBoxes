import { useState } from 'react';

const CustomSelect = ({ value, onChange, options, label, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (selectedOption) => {
        setSelectedValue(selectedOption);
        onChange(selectedOption);
        setIsOpen(false);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter options based on exact match
        const filtered = options.filter(option =>
            option.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredOptions(filtered);
    };

    return (
        <div className="col-span-12 sm:col-span-6">
            <label className="text-sm sm:text-base">{label}</label>
            <div className="relative mt-2">
                <div
                    className="border border-[#d4d4d8] rounded-lg flex items-center justify-between p-3 cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <span>{selectedValue ? selectedValue : placeholder}</span>
                    <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
                </div>
                {isOpen && (
                    <div className='absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg'>
                        <div>
                            <input
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder='Search Product'
                                className='w-full p-3 border-none focus:outline-none bg-gray-200'
                            />
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                            {filteredOptions?.length === 0 ? (
                                <div className="p-2 text-gray-500">No options found</div>
                            ) : (
                                filteredOptions?.map((option) => (
                                    <div
                                        key={option.name}
                                        className={`p-2 cursor-pointer hover:bg-gray-200 ${selectedValue === option.name ? 'bg-blue-500 text-white' : ''}`}
                                        onClick={() => handleOptionClick(option.name)}
                                    >
                                        {option.name}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomSelect;
