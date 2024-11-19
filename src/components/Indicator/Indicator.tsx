type IndicatorProps = {
  label: number;
  isActive: boolean;
};

function Indicator({ label, isActive = true }: IndicatorProps) {
  return (
    <div
      style={{
        width: "29px",
        aspectRatio: "1",
        padding: "0 10px",
        borderRadius: "50%",
        backgroundColor: isActive ? "#2ecc71" : "#d8d8d8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "18px",
      }}
    >
      {label}
    </div>
  );
}

export default Indicator;
