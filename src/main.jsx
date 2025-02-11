import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.jsx";
import { Service } from "./service";
import { Portfolio } from "./Portfolio.jsx";
import { Contact } from "./Contact.jsx";
import { Form } from "./Form.jsx";
createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Service />
    <Portfolio />
    <Contact />
    <Form />
  </div>
);
