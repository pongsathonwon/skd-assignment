import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Indicator from "../components/Indicator/Indicator";

describe("test indicator", () => {
  describe("test in active indicator", () => {
    const mockProps = {
      label: 1,
      isActive: false,
    };
    beforeEach(() => render(<Indicator {...mockProps} />));
    it("should render in active indictor", () => {
      const label = screen.getByText(mockProps.label);
      expect(label).toBeInTheDocument();
      expect(label).toHaveStyle({
        width: "29px",
        aspectRatio: "1",
        padding: "0 10px",
        borderRadius: "50%",
        backgroundColor: "#d8d8d8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "18px",
      });
    });
  });
  describe("test in active indicator", () => {
    const mockProps = {
      label: 1,
      isActive: true,
    };
    beforeEach(() => render(<Indicator {...mockProps} />));
    it("should render in active indictor", () => {
      const label = screen.getByText(mockProps.label);
      expect(label).toBeInTheDocument();
      expect(label).toHaveStyle({
        width: "29px",
        aspectRatio: "1",
        padding: "0 10px",
        borderRadius: "50%",
        backgroundColor: "#2ecc71",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "18px",
      });
    });
  });
});
