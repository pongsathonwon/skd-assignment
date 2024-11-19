import Hearticon from "../Icon/Hearticon";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="img/engi.png"
          srcSet="img/engi@2x.png 2x,img/engi@3x.png 3x"
          className="header-left-img"
        />
        <div className="header-left-text">
          <span className="header-left-line1 header-left-text-ali">
            คณะวิศวกรรมศาสตร์
          </span>
          <span className="header-left-line2 header-left-text-ali">
            สาขาวิศวกรรมทั่วไป
          </span>
          <span className="header-left-line3 header-left-text-ali">
            จุฬาลงกรณ์หมาวิทยาลัย
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
