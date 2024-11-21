import { Data } from "../../types/types";
import Content from "../Content/Content";
import Header from "../Header/Header";
import Social from "../Social/Social";
import Stat from "../Stat/Stat";
import "./style.css";

type CardProps = Data;

function Card({
  id,
  name,
  logo,
  roundSeats,
  score,
  faculty,
  likes,
}: CardProps) {
  return (
    <div className="frame" data-testid="card">
      <Header {...{ name, logo, faculty }} />
      <div className="linebreak"></div>
      <Content {...{ roundSeats, score }} />
      <div className="linebreak"></div>
      <Stat />
      <div className="linebreak"></div>
      <Social likes={likes} />
    </div>
  );
}

export default Card;
