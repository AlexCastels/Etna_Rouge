import { useEffect, useState } from "react";
import { client } from "../contentful/client";

interface EntryFields {
  fields: {
    title: string;
    video: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  contentTypeId: string;
}

interface ContentfulData {
  loading: boolean;
  data: EntryFields | null; 
  error: Error | null;
}

const useContentfulData = (entryId: string): ContentfulData => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<EntryFields | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.getEntry(entryId);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [entryId]);

  return { loading, data, error };
};

export default useContentfulData;
