import { CssBaseline } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Album } from './Album';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Album />
    </QueryClientProvider>
  );
}
