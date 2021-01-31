import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import Rides from "./Rides";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const queryClient = new QueryClient()

const App = () => {
  const title = "Rides Summary";
  return (
      <QueryClientProvider client={queryClient}>
          <div className="App">
              <h1> {title} </h1>
              <Rides />
          </div>
      </QueryClientProvider>
  );
};

export default App;
