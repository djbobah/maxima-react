import React from "react";
import { createRoot } from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";

import Counter, { randNumber, getRGB } from "./utils/functions";
import App from "./App.tsx";
import "./index.css";

const tag = createRoot(document.getElementById("root"));
tag.render(<App />);
