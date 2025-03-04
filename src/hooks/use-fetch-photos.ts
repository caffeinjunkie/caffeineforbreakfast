import { useState, useEffect } from 'react';
import * as prismic from "@prismicio/client";
import { usePrismicClient } from "@/prismic-client-context";

interface FetchPhotosState {
  data: any[] | null;
  error: string | null;
  loading: boolean;
}

interface Filter {
  key: string;
  value: string;
}

const fetchPhotos = async (client: prismic.Client, filters: Filter[]) => {
  const photos = await client.getAllByType("photos", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    lang: "en-us",
    filters: filters.map((filter) => prismic.filter.at(`my.photos.${filter.key}`, filter.value))
  });
  return photos;
};

export const useFetchPhotos = (filters: Filter[] = []): FetchPhotosState => {
  const client = usePrismicClient();
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchPhotos(client, filters);
        const formattedData = result.map((res) => ({
          ...res.data,
          id: res.id,
          tags: res.tags,
        }))
        console.log(formattedData, result);
        setData(formattedData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [client]);

  return { data, error, loading };
};
