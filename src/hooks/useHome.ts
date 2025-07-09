import { useState } from "react";
import type { IRepo, IUser } from "@/types";
import { fetchRepo, searchUsers } from "@/api";

export function useHome() {
  // Loading
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(false);

  // Search
  const [query, setQuery] = useState<string>("");

  // Users
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | undefined>(
    undefined,
  );

  // Repos
  const [repos, setRepos] = useState<IRepo[]>([]);

  // Collapsible
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    // If query are empty string do nothing
    if (!query) return;

    setLoadingUsers(true);
    setUsers([]);
    setSelectedUser(undefined);
    setIsOpen(false);
    setRepos([]);

    // Fetch users
    try {
      const results = await searchUsers(query);
      setUsers(results);
      if (results.length === 0) {
        setUsers([]);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("An unknown error occurred.");
      }
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleSelectUser = async (user: IUser) => {
    if (user.id === selectedUser?.id) {
      // Same user, no user changes
      setIsOpen(!isOpen);
    } else {
      // New selected user
      // Only fetch repo when selected user are changed
      setIsOpen(true);
      setSelectedUser(user);
      setLoadingRepos(true);
      setRepos([]);

      // Fetch repos
      try {
        const repoResults = await fetchRepo(user.login);
        setRepos(repoResults);
      } catch (err: unknown) {
        if (err instanceof Error) {
          alert(err.message);
        } else {
          alert("An error occurred while fetching repositories.");
        }
      } finally {
        setLoadingRepos(false);
      }
    }
  };

  return {
    query,
    handleSearch,
    users,
    repos,
    selectedUser,
    handleSelectUser,
    setQuery,
    isOpen,
    loadingUsers,
    loadingRepos,
  };
}
