import { useState } from "react";
import Indicator from "../Indicator/Indicator";
import "./style.css";
import EditScoreIcon from "../Icon/EditScoreIcon";
import Bagde from "../Icon/Bagde";
import { Data } from "../../types/types";

export type ContentProps = Pick<Data, "roundSeats" | "score">;

function Content({ roundSeats, score }: ContentProps) {
  const [round, setRound] = useState<number>(4);
  const year = `${score?.year}`.replace("25", "");
  const [myScroe, setMyScore] = useState<number>(23453);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="content-round">
        <span className="content-label">รอบที่เปิด</span>
        <div className="indicator-wrapper" data-testid="indicator">
          {roundSeats.map((s, i) => (
            <Indicator key={i} label={i + 1} isActive={s > 0} />
          ))}
        </div>
      </div>
      <div className="content-score">
        {score ? (
          <span className="content-score-text" data-testid="label-text">
            รอบที่ {round} : {score.scoreType}
          </span>
        ) : (
          <div></div>
        )}
        <button className="content-score-btn">
          แก้ไขคะแนน <EditScoreIcon />
        </button>
      </div>
      <div className="content-display">
        <div className="content-display-line1 pl-30">
          <Bagde />{" "}
          <div className="score-box">
            <span className="subtext">คะแนนของคุณคือ</span>
            <span className="highlight">{myScroe.toLocaleString("en-US")}</span>
          </div>
        </div>
        {score ? (
          <div className="content-display-line1">
            <div className="score-box2">
              <div className="score-box2-inner mr-auto">
                <span className="highlight">
                  {score.min.toLocaleString("en-US")}
                </span>
                <span>คะแนนต่ำสุด {year}</span>
              </div>
            </div>
            <div className="score-box2">
              <div className="score-box2-inner">
                <span className="highlight">
                  {score.avg.toLocaleString("en-US")}
                </span>
                <span>คะแนนเฉลี่ย {year}</span>
              </div>
            </div>
            <div className="score-box2">
              <div className="score-box2-inner ml-auto">
                <span className="highlight">
                  {score.max.toLocaleString("en-US")}
                </span>
                <span>คะแนนสูงสุด {year}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="content-display-line1 text-color">ไม่มีข้อมูล</div>
        )}
      </div>
    </div>
  );
}

export default Content;
