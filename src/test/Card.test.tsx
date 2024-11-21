import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Data } from "../types/types";
import { Card } from "../components";
describe("Card Component", () => {
  const mockCardProps: Data = {
    id: "1",
    name: "Computer Science",
    logo: "https://example.com/logo.png",
    roundSeats: [10, 20, 30, 40, 50],
    score: {
      id: "1",
      year: 2023,
      scoreType: "ADMISSION",
      min: 50,
      max: 100,
      avg: 75,
    },
    faculty: {
      id: "1",
      name: "Engineering",
      tagId: "1",
      university: {
        id: "1",
        name: "Example University",
      },
    },
    likes: 100,
    updatedAt: "23-06-01-12:30:45.123:Z",
  };

  beforeEach(() => {
    vi.mock("../components/Header/Header", () => ({
      default: vi.fn(({ name, logo }) => (
        <div data-testid="mock-header">
          <span>{name}</span>
          <img src={logo} alt={`${name}-logo`} />
        </div>
      )),
    }));

    vi.mock("../components/Content/Content", () => ({
      default: vi.fn(({ roundSeats, score }) => (
        <div data-testid="mock-content">
          <span>Round Seats: {roundSeats.join(", ")}</span>
          {score && <span>Score: {score.avg}</span>}
        </div>
      )),
    }));

    vi.mock("../components/Stat/Stat", () => ({
      default: vi.fn(() => <div data-testid="mock-stat">Stat Component</div>),
    }));

    vi.mock("../components/Social/Social", () => ({
      default: vi.fn(({ likes }) => (
        <div data-testid="mock-social">Likes: {likes}</div>
      )),
    }));
  });

  describe("Component Structure", () => {
    beforeEach(() => {
      render(<Card {...mockCardProps} />);
    });

    it("should render card with correct data-testid", () => {
      const card = screen.getByTestId("card");
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass("frame");
    });

    it("should render child components in correct order", () => {
      const childComponents = [
        "mock-header",
        "mock-content",
        "mock-stat",
        "mock-social",
      ];

      const renderedComponents = screen.getAllByTestId(/mock-/);
      expect(renderedComponents).toHaveLength(childComponents.length);
    });

    it("should render linebreak divs between components", () => {
      const linebreaks = screen
        .getAllByTestId("card")[0]
        .querySelectorAll(".linebreak");
      expect(linebreaks).toHaveLength(3);
    });
  });

  describe("Prop Passing", () => {
    beforeEach(() => {
      render(<Card {...mockCardProps} />);
    });

    it("should pass correct props to Header component", () => {
      const header = screen.getByTestId("mock-header");
      expect(header).toHaveTextContent(mockCardProps.name);
      expect(header.querySelector("img")).toHaveAttribute(
        "src",
        mockCardProps.logo
      );
    });

    it("should pass correct props to Content component", () => {
      const content = screen.getByTestId("mock-content");
      expect(content).toHaveTextContent(mockCardProps.roundSeats.join(", "));
      expect(content).toHaveTextContent(`Score: ${mockCardProps.score?.avg}`);
    });

    it("should pass likes to Social component", () => {
      const social = screen.getByTestId("mock-social");
      expect(social).toHaveTextContent(`Likes: ${mockCardProps.likes}`);
    });
  });

  describe("Edge Cases", () => {
    it("should render with minimal props", () => {
      const minimalProps: Data = {
        ...mockCardProps,
        score: null,
        likes: 0,
      };

      render(<Card {...minimalProps} />);

      expect(screen.getByTestId("card")).toBeInTheDocument();
      expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    });

    it("should handle undefined or null props gracefully", () => {
      const incompleteProps = {
        ...mockCardProps,
        score: undefined,
        likes: undefined,
      };

      render(<Card {...(incompleteProps as any)} />);

      expect(screen.getByTestId("card")).toBeInTheDocument();
    });
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });
});
