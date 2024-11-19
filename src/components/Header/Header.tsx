import { Faculty } from "../../types/types";
import Hearticon from "../Icon/Hearticon";
import "./style.css";

type HeaderProps = { name: string; logo: string; faculty: Faculty };

function Header({ name, logo, faculty }: HeaderProps) {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} className="header-left-img" />
        <div className="header-left-text">
          <span className="header-left-line1 header-left-text-ali">{name}</span>
          <span className="header-left-line2 header-left-text-ali">
            {faculty.name}
          </span>
          <span className="header-left-line3 header-left-text-ali">
            {faculty.university.name}
          </span>
        </div>
      </div>
      <div className="header-right">
        <button className="icon-btn">
          <Hearticon />
        </button>
      </div>
    </div>
  );
}

export default Header;
