// useFetch.test.tsx
import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { useFetch } from "../api";
import { Data } from "../types/types";

describe("useFetch", () => {
  const fetchSpy = vi.spyOn(window, "fetch");
  const consoleSpy = vi.spyOn(console, "error");

  const mockArr = [
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
  ] satisfies Data[];

  afterEach(() => {
    fetchSpy.mockReset();
    consoleSpy.mockReset();
  });

  describe("success fetching data", () => {
    const mockData = {
      ok: true,
      json: () => new Promise<Data[]>((resolve) => resolve(mockArr)),
    };

    it("should success fetching data", async () => {
      fetchSpy.mockResolvedValue(mockData as any);
      const { result } = renderHook(useFetch);
      expect(result.current.loading).toBe(true);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe(null);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(null);
        expect(result.current.data?.length).toBe(mockArr.length);
        expect(consoleSpy).not.toBeCalled();
      });
    });
  });

  it("fail fetch data due to http", async () => {
    fetchSpy.mockResolvedValue({
      ok: false,
      json: () => new Promise<Data[]>((resolve) => resolve(mockArr)),
    } as any);

    const { result } = renderHook(useFetch);
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe("cannot fetch data");
      expect(result.current.data).toBe(null);
      expect(consoleSpy).toHaveBeenCalledOnce();
    });
  });

  describe("fail fetching data", async () => {
    it("should fail fetching data", async () => {
      fetchSpy.mockRejectedValue(new Error("cannot fetch"));
      const { result } = renderHook(useFetch);
      expect(result.current.loading).toBe(true);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe(null);
      expect(consoleSpy).not.toBeCalled();
      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe("cannot fetch");
        expect(result.current.data).toBe(null);
        expect(consoleSpy).toHaveBeenCalledOnce();
      });
    });
  });
});
