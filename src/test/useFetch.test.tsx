// useFetch.test.tsx
import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useFetch } from "../api";

describe("useFetch", () => {
  // Mock data that matches your Data type
  const mockData = [
    { id: 1, name: "Test Item 1" },
    { id: 2, name: "Test Item 2" },
  ];

  // Store the original fetch
  const originalFetch = global.fetch;

  beforeEach(() => {
    // Reset fetch mock before each test
    vi.resetAllMocks();
  });

  afterEach(() => {
    // Restore original fetch after each test
    global.fetch = originalFetch;
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useFetch());

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(true);
  });

  it("should fetch data successfully", async () => {
    // Mock successful fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const { result } = renderHook(() => useFetch());

    // Initially loading
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    // Wait for the fetch to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Verify final state
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);

    // Verify fetch was called correctly
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
    );
  });

  it("should handle network error", async () => {
    // Mock fetch network error
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const { result } = renderHook(() => useFetch());

    // Wait for the fetch to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Verify error state
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe("Network error");
    expect(result.current.loading).toBe(false);
  });

  it("should handle non-ok response", async () => {
    // Mock non-ok response
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    const { result } = renderHook(() => useFetch());

    // Wait for the fetch to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Verify error state
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe("cannot fetch data");
    expect(result.current.loading).toBe(false);
  });

  it("should handle non-Error thrown object", async () => {
    // Mock throwing a non-Error object
    global.fetch = vi.fn().mockImplementation(() => {
      throw "Some unexpected error";
    });

    const { result } = renderHook(() => useFetch());

    // Wait for the fetch to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Verify error state
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe("Some unexpected error");
    expect(result.current.loading).toBe(false);
  });

  // Optional: Test cleanup/unmounting
  it("should not update state if component unmounts during fetch", async () => {
    // Create a delayed mock response
    global.fetch = vi.fn().mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
              }),
            100
          )
        )
    );

    const { result, unmount } = renderHook(() => useFetch());

    // Unmount immediately
    unmount();

    // Wait a bit to ensure fetch completes
    await new Promise((resolve) => setTimeout(resolve, 150));

    // State should remain in initial state
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(true);
  });
});
