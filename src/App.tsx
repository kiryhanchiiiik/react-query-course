import "./App.css";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function Book() {
  const { data } = useQuery({
    queryKey: ["book"],
    queryFn: () => Promise.resolve("The Hobbit"),
  });
  return (
    <div>
      <header className="app-header">
        <h1>
          <span>Query Library</span>
        </h1>
      </header>
      <main>
        <h2 className="book-title">{data}</h2>
      </main>
    </div>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Book />
    </QueryClientProvider>
  );
}
