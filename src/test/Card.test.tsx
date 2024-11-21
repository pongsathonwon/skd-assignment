import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Card } from "../components";
import { Data } from "../types/types";

describe("test card component", () => {
  const mockProps = {
    id: "6997",
    name: "หลักสูตรทันตแพทยศาสตรบัณฑิต (ท.บ.) ",
    logo: "https://tcas-assets.skooldio.com/icons/edugroup/med.png",
    roundSeats: [8, 12, 80, -1, -1],
    score: null,
    faculty: {
      id: "1464",
      name: "คณะทันตแพทยศาสตร์",
      tagId: "2",
      university: {
        id: "313",
        name: "จุฬาลงกรณ์มหาวิทยาลัย",
      },
    },
    updatedAt: "2019-07-12T05:39:29.000Z",
    likes: 6935,
  } satisfies Data;

  beforeEach(() => render(<Card {...mockProps} />));

  it("should render", () => {
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("frame");
  });
});
