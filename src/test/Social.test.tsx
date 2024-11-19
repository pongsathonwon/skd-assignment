import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Social } from "../components";

describe("test social component", () => {
  const likes = 5173;
  beforeEach(() => {
    render(<Social likes={likes} />);
  });

  it("should render social", () => {
    expect(screen.getByText(/Social/)).toBeInTheDocument();
  });

  it("should render social", () => {
    const like = screen.getByText(`${likes}`);
    expect(like).toBeInTheDocument();
    expect(like.textContent).toBe(`${likes}`);
  });
});
