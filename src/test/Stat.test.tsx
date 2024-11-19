import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Stat } from "../components";

describe("test stat comppnent", () => {
  beforeEach(() => render(<Stat />));

  it("should render arrow icon", () => {
    const arrow = screen.getByTestId("arrow");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveClass("stat-triangle");
  });

  it("should render label text", () => {
    const label = screen.getByText("ดูสัดส่วนคะแนน");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("stat-label");
  });
});
