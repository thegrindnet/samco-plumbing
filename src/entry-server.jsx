import { renderToString } from "react-dom/server";
import App from "./components/App/App.jsx";
export function render() {
  return renderToString(<App />);
}
