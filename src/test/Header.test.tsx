import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Header } from "../components";
import { HeaderProps } from "../components/Header/Header";

describe("test header component", () => {
  const mockProps = {
    name: "department",
    logo: "https://fastly.picsum.photos/id/8/200/200.jpg?hmac=7z37E8o2M_U09oSFIN5CdqKXlYXuLeWxTHJVlT9UUlY",
    faculty: {
      id: "1",
      name: "faculty",
      tagId: "2",
      university: {
        id: "3",
        name: "uni",
      },
    },
  } satisfies HeaderProps;
  beforeEach(() => render(<Header {...mockProps} />));

  it("should render header text with correvt style", () => {
    const department = screen.getByText(mockProps.name);
    expect(department).toBeInTheDocument();
    expect(department).toHaveClass("header-left-line1 header-left-text-ali");

    const faculty = screen.getByText(mockProps.faculty.name);
    expect(faculty).toBeInTheDocument();
    expect(faculty).toHaveClass("header-left-line2 header-left-text-ali");

    const university = screen.getByText(mockProps.faculty.university.name);
    expect(university).toBeInTheDocument();
    expect(university).toHaveClass("header-left-line3 header-left-text-ali");
  });

  it("should render image correctly", () => {
    const img = screen.getByTestId("logo");
    expect(img).toHaveAttribute(
      "src",
      "https://fastly.picsum.photos/id/8/200/200.jpg?hmac=7z37E8o2M_U09oSFIN5CdqKXlYXuLeWxTHJVlT9UUlY"
    );
    expect(img).toHaveAttribute("alt", `${mockProps.name}-logo`);
    expect(img).toHaveClass("header-left-img");
  });

  it("should render heart button", () => {
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("icon-btn");
  });
});
