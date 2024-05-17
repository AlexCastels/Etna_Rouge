import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";
import { Profiler, ProfilerOnRenderCallback, StrictMode } from "react";

const onRenderCallback:ProfilerOnRenderCallback = (
    id:any, // the "id" prop of the Profiler tree that has just committed
    phase:any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration:any, // time spent rendering the committed update
    baseDuration:any, // estimated time to render the entire subtree without memoization
    startTime:any, // when React began rendering this update
    commitTime:any, // when React committed this update
    interactions:any // the Set of interactions belonging to this update
  ) => {
    console.log({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions});
  }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
   <Profiler id="App" onRender={onRenderCallback} >
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
     </Profiler >
  </>
);
