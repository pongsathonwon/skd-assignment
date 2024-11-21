import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import * as api from "../api";
import { Data } from "../types/types";

describe("render app component", () => {
  const mockSuccess = [
    {
      id: "6998",
      name: "สาขาวิชาเภสัชกรรมอุตสาหการ",
      logo: "https://tcas-assets.skooldio.com/icons/edugroup/med.png",
      roundSeats: [5, 6, 80, 10, 6],
      score: {
        id: "18844",
        year: 2562,
        scoreType: "ADMISSION",
        min: 20663.1,
        max: 22307.3,
        avg: 0,
      },
      faculty: {
        id: "1465",
        name: "คณะเภสัชศาสตร์",
        tagId: "2",
        university: {
          id: "313",
          name: "จุฬาลงกรณ์มหาวิทยาลัย",
        },
      },
      updatedAt: "2019-03-13T07:00:46.000Z",
      likes: 3014,
    },
    {
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
    },
    {
      id: "10711",
      name: "สาขาวิชาวิศวกรรมศาสตร์",
      logo: "https://tcas-assets.skooldio.com/icons/edugroup/engineer.png",
      roundSeats: [12, 40, 430, 38, 20],
      score: {
        id: "18857",
        year: 2562,
        scoreType: "ADMISSION",
        min: 20773.4,
        max: 25631.7,
        avg: 0,
      },
      faculty: {
        id: "1470",
        name: "คณะวิศวกรรมศาสตร์",
        tagId: "6",
        university: {
          id: "313",
          name: "จุฬาลงกรณ์มหาวิทยาลัย",
        },
      },
      updatedAt: "2018-04-27T09:37:11.000Z",
      likes: 6510,
    },
    {
      id: "7621",
      name: "สาขาวิชาวิศวกรรมคอมพิวเตอร์",
      logo: "https://tcas-assets.skooldio.com/icons/edugroup/engineer.png",
      roundSeats: [20, 34, 15, 7, -1],
      score: null,
      faculty: {
        id: "1537",
        name: "คณะวิศวกรรมศาสตร์",
        tagId: "6",
        university: {
          id: "316",
          name: "มหาวิทยาลัยเชียงใหม่",
        },
      },
      updatedAt: "2019-03-15T07:54:30.000Z",
      likes: 892,
    },
  ] satisfies Data[];
  const useFetchSpy = vi.spyOn(api, "useFetch");

  it("should render loading", () => {
    useFetchSpy.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    render(<App />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.queryAllByTestId("card").length).toBe(0);
    expect(screen.queryByTestId("error")).toBe(null);
  });

  it("should render data", () => {
    useFetchSpy.mockReturnValue({
      loading: false,
      error: null,
      data: mockSuccess,
    });

    render(<App />);
    expect(screen.getAllByTestId("card").length).toBe(mockSuccess.length);
    expect(screen.queryByTestId("loading")).toBe(null);
    expect(screen.queryByTestId("error")).toBe(null);
  });

  it("should render error", () => {
    useFetchSpy.mockReturnValue({
      data: null,
      loading: false,
      error: "somthing went wrong",
    });
    render(<App />);
    expect(screen.queryAllByTestId("card").length).toBe(0);
    expect(screen.queryByTestId("loading")).toBe(null);
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });
});
