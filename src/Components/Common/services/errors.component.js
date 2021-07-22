import React, { useEffect, useState } from "react";
import { apiManager } from "./api.manager";

export const Errors = () => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    apiManager.on("apiError", (error) => {
      setErrors(apiManager.errors);
    });
  }, []);

  return (
    <ul>
      {errors.map((error) => {
        return <li>{error}</li>;
      })}
    </ul>
  );
};
