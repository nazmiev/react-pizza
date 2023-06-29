import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { store } from "./redux/store"
import { Provider } from 'react-redux'

const baseName = import.meta.env.BASE_URL;
const rootElem = document.getElementById("root");

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter basename={baseName}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
