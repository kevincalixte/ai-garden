import React, { useState } from "react";

type SwitchProps = {
  value: string;
};
const Switch = ({ value }: SwitchProps) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <span>{value}</span>
      <button
        type="button"
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
          enabled ? "bg-[#074703]" : "bg-gray-300"
        }`}
        onClick={() => setEnabled(!enabled)}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default Switch;
