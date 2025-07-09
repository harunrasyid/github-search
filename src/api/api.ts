import type { IRepo, IUser } from "@/types";

/**
 * Searches for GitHub users matching the provided query string.
 *
 * @param query - The search term to query GitHub users.
 * @returns A promise that resolves to an array of IUser objects (up to 5 results).
 * @throws Will throw an error if the GitHub API request fails.
 */
export const searchUsers = async (query: string): Promise<IUser[]> => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${query}&per_page=5`,
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data = await res.json();
  return data.items || [];
};

/**
 * Fetches the public repositories for a given GitHub username.
 *
 * @param username - The GitHub username whose repositories are to be fetched.
 * @returns A promise that resolves to an array of IRepo objects representing the user's repositories.
 * @throws Will throw an error if the GitHub API request fails.
 */
export const fetchRepo = async (username: string): Promise<IRepo[]> => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error(`Failed to fetch repositories for ${username}`);
  const data = await res.json();
  return data || [];
};
