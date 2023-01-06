import axios from 'axios';

export const getData = async <T>(
  url: string
): Promise<{ data: T | null; error: null | string }> => {
  try {
    const { data } = await axios.get<T>(url);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error instanceof Error ? error.message : 'Error occurred.' };
  }
};
