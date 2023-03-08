import { Form } from "./types";

const URL = "https://api.supermomos-dev.com/interview/social";

export const createSocial = async (form: Form) => {
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(form),
  });
  return response.json();
};

export const _createSocial = async (form: Form) => {
  const response = await fetch("/api/create", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(form),
  });
  return response.json();
};
