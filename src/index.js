import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Checkers from "./features/checkers/Checkers";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Checkers />
    </Provider>
);
