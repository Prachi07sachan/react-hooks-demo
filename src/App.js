import { Routes, Route, Link } from "react-router-dom";

import UseStateDemo from "./hooks/UseStateDemo";
import UseEffectDemo from "./hooks/UseEffectDemo";
import UseContextDemo from "./hooks/UseContextDemo";
import UseRefDemo from "./hooks/UseRefDemo";
import UseMemoDemo from "./hooks/UseMemoDemo";
import UseCallbackDemo from "./hooks/UseCallbackDemo";
import UseReducerDemo from "./hooks/UseReducerDemo";
import CustomHookDemo from "./hooks/CustomHookDemo";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">useState</Link> |{" "}
        <Link to="/effect">useEffect</Link> |{" "}
        <Link to="/context">useContext</Link> |{" "}
        <Link to="/ref">useRef</Link> |{" "}
        <Link to="/memo">useMemo</Link> |{" "}
        <Link to="/callback">useCallback</Link> |{" "}
        <Link to="/reducer">useReducer</Link> |{" "}
        <Link to="/custom">Custom Hook</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UseStateDemo />} />
        <Route path="/effect" element={<UseEffectDemo />} />
        <Route path="/context" element={<UseContextDemo />} />
        <Route path="/ref" element={<UseRefDemo />} />
        <Route path="/memo" element={<UseMemoDemo />} />
        <Route path="/callback" element={<UseCallbackDemo />} />
        <Route path="/reducer" element={<UseReducerDemo />} />
        <Route path="/custom" element={<CustomHookDemo />} />
      </Routes>
    </div>
  );
}

export default App;
