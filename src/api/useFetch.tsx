import { useEffect, useState } from "react";
import { Data } from "../types/types";

function useFetch() {
  const [data, setData] = useState<Data[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const url = "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json";
    (async () => {
      try {
        const resData = await fetch(url);
        if (!resData.ok) throw new Error("cannot fetch data");
        const data = (await resData.json()) as Data[];
        setData(data);
      } catch (err) {
        if (!(err instanceof Error)) {
          console.error(err);
          setError(`${err}`);
          return;
        }
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, error, loading };
}

export default useFetch;
