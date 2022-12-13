import React from "react";
export { default as Error } from "./Error";
export { default as Register } from "./Register";
export { default as ProtectedRoute } from "./ProtectedRoute";

export const Landing = React.lazy(() => import("./Landing"));
