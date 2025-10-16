import apiClient from "./apiClient";

const USER_URL = "https://rimac-front-end-challenge.netlify.app/api/user.json";

export interface User {
  name: string;
  lastName: string;
  age: number;
  dni: string;
}

const userService = {
  async getUser(): Promise<User> {
    const { data } = await apiClient.get<User>(USER_URL);
    return data;
  },
};

export default userService;
