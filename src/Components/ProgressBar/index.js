import { useEffect, useState } from "react";

const ProgressBar = ({value}) => {
    console.log(value, 'value')
    const [percentage, setPercentage] = useState(value);

    useEffect(() => {
        setPercentage(Math.min(100, Math.max(value, 0)))
    },[value])

    return (
        <div className="border border-1 relative overflow-hidden w-[500px] h-[26px] rounded-md bg-[#e9ecefd9]">
            <span className="absolute w-full flex justify-center items-center">{percentage.toFixed(2)}%</span>
            <div style={{width: `${percentage}%`}} className="h-full bg-[#00c251]"></div>
        </div>
    )
}
export default ProgressBar;