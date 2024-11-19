import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Content } from "../components";
import { ContentProps } from "../components/Content/Content";

describe("test content component", () => {
  describe("test content with score not null", () => {
    const mockProps = {
      roundSeats: [5, 6, 80, 10, 6],
      score: {
        id: "18844",
        year: 2562,
        scoreType: "ADMISSION",
        min: 20663.1,
        max: 22307.3,
        avg: 0,
      },
    } satisfies ContentProps;

    beforeEach(() => render(<Content {...mockProps} />));

    it("should render indicator", () => {
      const indicators = screen.getByTestId("indicator");

      expect(indicators).toBeInTheDocument();
      expect(indicators.childElementCount).toBe(mockProps.roundSeats.length);
    });

    it("should render button", () => {
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveClass("content-score-btn");
      expect(btn).toHaveTextContent(/แก้ไขคะแนน/);
      expect(btn.childElementCount).toBe(1);
    });

    it("should render text label", () => {
      const textLabel = screen.getByTestId("label-text");
      expect(textLabel).toBeInTheDocument();
      expect(textLabel.textContent).toBe(
        `รอบที่ 4 : ${mockProps.score.scoreType}`
      );
    });
  });
});
