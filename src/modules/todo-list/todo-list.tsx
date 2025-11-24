import { useQuery } from "@tanstack/react-query";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export const getTasks = () => {
  return new Promise<Todo[]>((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          text: "todo1",
          done: false,
        },
        {
          id: 2,
          text: "todo2",
          done: false,
        },
      ]);
    });
  });
};

export function TodoList() {
  const { data, error, isPending } = useQuery({
    queryKey: ["tasks", "list"],
    queryFn: getTasks,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error: {JSON.stringify(error)}</div>;
  }
  return (
    <div>
      <div>Todo List</div>
      <div>
        {data.map((todo) => {
          return <div key={todo.id}>{todo.text}</div>;
        })}
      </div>
    </div>
  );
}
