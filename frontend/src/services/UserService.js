const backend = import.meta.env.VITE_BACKEND_URL;
const api = `${backend}/api`;
const model = "users";

export default class UserService {
  static get headers() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${UserService.getToken()}`,
    };
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static async fetchUsers() {
    try {
      const response = await fetch(`${api}/${model}`, {
        headers: UserService.headers,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
}
