import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { AxiosRequestConfig, CanceledError } from "axios";
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  reqConfig?: AxiosRequestConfig,
  dept?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  useEffect(
    () => {
      const controller = new AbortController();
      setIsloading(true);
      ApiClient.get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...reqConfig,
      })
        .then((res) => {
          setData(res.data.results);
          setIsloading(false);
        })

        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsloading(false);
        });

      return () => controller.abort();
    },
    dept ? [...dept] : []
  );
  return { data, error, isLoading };
};
export default useData;
