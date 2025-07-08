import type { IRepo, IUser } from "@/types";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers: HeadersInit = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
};
export const searchUsers = async (query: string): Promise<IUser[]> => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${query}&per_page=5`,
    {
      headers,
    },
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data = await res.json();
  return data.items || [];
};

export const fetchRepo = async (username: string): Promise<IRepo[]> => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers,
  });
  if (!res.ok) throw new Error(`Failed to fetch repositories for ${username}`);
  const data = await res.json();
  return data || [];
};
