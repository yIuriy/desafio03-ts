import { api } from "../api";

interface IStatus {
  statusCode: number;
  isLoggedIn: boolean;
}

export const login = async (
  email: string,
  password: string
): Promise<IStatus> => {
  const data: any = await api;

  if (email !== data.email) {
    return {
      statusCode: 420, // Bad Email
      isLoggedIn: false,
    };
  }

  if (password !== data.password) {
    return {
      statusCode: 430, // Bad Password
      isLoggedIn: false,
    };
  }

  return {
    statusCode: 200,
    isLoggedIn: true,
  };
};
