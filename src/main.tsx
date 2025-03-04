import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import { PrismicProvider } from "./prismic-client-context.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <PrismicProvider>
          <App />
        </PrismicProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
