import { useState } from "react";
import Indicator from "../Indicator/Indicator";
import "./style.css";
import EditScoreIcon from "../Icon/EditScoreIcon";
import Bagde from "../Icon/Bagde";
function Content() {
  const [round, setRound] = useState<number>(4);
  const [roundLabel, setRoundLabel] = useState<string>("Admission");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="content-round">
        <span className="content-label">รอบที่เปิด</span>
        <div className="indicator-wrapper">
          {[...Array(5)].map((_, i) => (
            <Indicator
              key={i}
              label={i + 1}
              isActive={i + 1 !== 3 && i + 1 !== 5}
            />
          ))}
        </div>
      </div>
      <div className="content-score">
        <span className="content-score-text">
          รอบที่ {round} : {roundLabel}
        </span>
        <button className="content-score-btn">
          แก้ไขคะแนน <EditScoreIcon />
        </button>
      </div>
      <div className="content-display">
        <div className="content-display-line1">
          <Bagde /> <div>score </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
