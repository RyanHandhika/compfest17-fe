import client from "./client";

export async function login(email, password) {
  const response = await client.post("/auth/login", { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
}

export async function register(fullName, email, password, role) {
  const response = await client.post("/auth/register", {
    fullName,
    email,
    password,
    role,
  });
  localStorage.setItem("token", response.data.token);
  return response.data;
}
