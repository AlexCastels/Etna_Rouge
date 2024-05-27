import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";

import { DarkModeProvider } from "./components/darkmode/DarkmodeContext.tsx";
import { Profiler } from "react";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
 
    <Provider store={store}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
      </Provider>
  
  </>
);
