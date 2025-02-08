// custom hook for fetching the data
import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { session } = useSession();
  // console.log(session);

  const fn = async (...args) => {
    setLoading(true);
    setError(true);

    // callback coming from params

    try {
      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });

      const response = await cb(supabaseAccessToken, options, ...args);
      // console.log(response)
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {fn,data,loading,error}
};

export default useFetch