const BASE_URL = "http://localhost:3000";

export type PaginatedResult<T> = {
  data: T[];
  items: number;
  pages: number;
  last: number;
  first: number;
  next: number | null;
  prev: number | null;
};

export type TodoDto = {
  id: number;
  text: string;
  done: boolean;
};

export const todoListApi = {
  getTodoList: async (
    { page }: { page: number },
    { signal }: { signal: AbortSignal }
  ) => {
    return fetch(`${BASE_URL}/tasks?_page=${page}&_per_page=10`, {
      signal,
    }).then((res) => res.json() as Promise<PaginatedResult<TodoDto>>);
  },
};
