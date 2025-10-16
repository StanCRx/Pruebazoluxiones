import apiClient from "./apiClient";

const PLANS_URL =
  "https://rimac-front-end-challenge.netlify.app/api/plans.json";

export interface Plan {
  name: string;
  price: number;
  description?: string;
}

const planService = {
  async getPlans(): Promise<Plan[]> {
    const { data } = await apiClient.get<Plan[]>(PLANS_URL);
    return data;
  },
};

export default planService;
