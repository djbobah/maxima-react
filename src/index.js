import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import Counter, { randNumber, getRGB } from "./utils/functions";

const n = new Counter();
n.change(randNumber(101));
n.inc();
n.inc();
console.log(n.val);

const tag = createRoot(document.getElementById("root"));
tag.render(<h1>{n.val}</h1>);
