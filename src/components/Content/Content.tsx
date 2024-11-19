import { useState } from "react";
import Indicator from "../Indicator/Indicator";
import "./style.css";
import EditScoreIcon from "../Icon/EditScoreIcon";
import Bagde from "../Icon/Bagde";
function Content() {
  const [round, setRound] = useState<number>(4);
  const [roundLabel, setRoundLabel] = useState<string>("Admission");
  const [year, setYear] = useState<number>(60);
  const [max, setMax] = useState<number>(23415);
  const [avg, setAvg] = useState<number>(21345);
  const [min, setMin] = useState<number>(20845);
  const [scroe, setScore] = useState<number>(23453);
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
        <div className="content-display-line1 pl-30">
          <Bagde />{" "}
          <div className="score-box">
            <span className="subtext">คะแนนของคุณคือ</span>
            <span className="highlight">{scroe.toLocaleString("en-US")}</span>
          </div>
        </div>
        <div className="content-display-line1">
          <div className="score-box2">
            <div className="score-box2-inner mr-auto">
              <span className="highlight">{min.toLocaleString("en-US")}</span>
              <span>คะแนนต่ำสุด {year}</span>
            </div>
          </div>
          <div className="score-box2">
            <div className="score-box2-inner">
              <span className="highlight">{avg.toLocaleString("en-US")}</span>
              <span>คะแนนเฉลี่ย {year}</span>
            </div>
          </div>
          <div className="score-box2">
            <div className="score-box2-inner ml-auto">
              <span className="highlight">{max.toLocaleString("en-US")}</span>
              <span>คะแนนสูงสุด {year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
