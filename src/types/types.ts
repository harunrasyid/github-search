export interface IUser {
  login: string;
  id: number;
}

export interface IRepo {
  id: number;
  name: string;
  stargazers_count: number;
  description: string;
}
