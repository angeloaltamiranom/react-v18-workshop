import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Routes } from './Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});

function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </QueryClientProvider>
    )
}

export default App;
