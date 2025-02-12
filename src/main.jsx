import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { Service } from "./components/service.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Contact } from "./components/Contact.jsx";
import { Form } from "./components/Form.jsx";
createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Service />
    <Portfolio />
    <Contact />
    <Form />
  </div>
);
