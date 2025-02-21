'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MultiSelectProps {
  options: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    if (!selectedOptions.includes(option)) {
      const newSelection = [...selectedOptions, option];
      setSelectedOptions(newSelection);
      onChange(newSelection);
    }
  };

  const handleRemove = (option: string) => {
    const newSelection = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(newSelection);
    onChange(newSelection);
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedOptions.map((option) => (
          <span
            key={option}
            className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-full"
          >
            {option}
            <X
              className="ml-2 cursor-pointer"
              size={16}
              onClick={() => handleRemove(option)}
            />
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`px-3 py-1 rounded-lg border ${selectedOptions.includes(option)
              ? 'bg-gray-300 cursor-not-allowed'
              : 'hover:bg-blue-100'
              }`}
            disabled={selectedOptions.includes(option)}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;