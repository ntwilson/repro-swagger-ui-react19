import React from "react";
import { createRoot } from "react-dom/client";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

createRoot(document.getElementById("root")).render(
  <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
);
