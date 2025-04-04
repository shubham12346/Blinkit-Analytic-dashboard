import { LineChart } from "lucide-react";
import Switch from "@mui/material/Switch";

import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "white", // White toggle
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#0E7046", // Dark green background
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "white", // White thumb inside
  },
}));

export default function ToggleCard() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
  };

  return (
    <div className="inline-flex gap-3 items-center px-4 py-2 bg-white rounded-[10px]  border border-gray-200">
      <LineChart className="w-5 h-5 text-gray-700" size="small" />
      <button
        type="button"
        onClick={handleToggle}
        className={`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none  focus:ring-offset-2
          ${isEnabled ? "bg-green-500" : "bg-gray-200"}
        `}
        role="switch"
        aria-checked={isEnabled}
      >
        <span className="sr-only">Enable chart view</span>
        <span
          className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
            transition duration-200 ease-in-out
            ${isEnabled ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
}
