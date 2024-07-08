import { useState } from "react";
import usePasswordGenerator from "./usePasswordGenerator";

const PasswordGenerator = () => {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lower Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const {password, errorMessage, generatePassword} = usePasswordGenerator();

  const handleCheckBoxChange = (i) => {
    const updatedCheckboxData = [...checkBoxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckBoxData(updatedCheckboxData);
  };

  console.log(password, '')

  return (
    <div className="flex flex-col gap-4 bg-[#24232b] p-6">
      {/* Header */}
      <div className="flex justify-between font-[20px]">
        <div className="text-white">{password}</div>
        <button className="text-white bg-[#2a8b8b] rounded-md p-2 font-medium cursor-pointer uppercase">
          Copy
        </button>
      </div>
      {/* check character length */}
      <div className="flex flex-col justify-between">
        <span className="flex gap-2 justify-between">
          <label className="text-white">Character length</label>
          <label className="text-white">{length}</label>
        </span>
        <input
          className="cursor-pointer"
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {checkBoxData?.map((checkBox, i) => {
          return (
            <div key={i} className="flex gap-2">
              <input
                className="cursor-pointer"
                type="checkBox"
                checked={checkBox.state}
                onChange={() => handleCheckBoxChange(i)}
              />
              <label className="text-white">{checkBox.title}</label>
            </div>
          );
        })}
      </div>
      <button className="bg-[#2a8b8b] p-2 uppercase rounded-md" onClick={() => generatePassword(checkBoxData, length)}>
        Generte Password
      </button>
      {
        errorMessage && <span className="text-red">{errorMessage}</span>
      }
    </div>
  );
};
export default PasswordGenerator;
