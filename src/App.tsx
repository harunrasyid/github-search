import { Button, Input, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import { EmptyState, RepoCard, UserCard } from "@/components";
import { isEmptyList, isEmptyString } from "@/utils";
import { useHome } from "@/hooks";
import { styles } from "./App.style.ts";

function App() {
  const {
    users,
    repos,
    selectedUser,
    handleSelectUser,
    handleSearch,
    query,
    setQuery,
    isOpen,
    loadingUsers,
    loadingRepos,
  } = useHome();

  return (
    <VStack sx={styles.page}>
      {/* Search */}
      <Stack sx={styles.search}>
        {/* Input */}
        <Input
          type={"search"}
          placeholder="Enter username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Button */}
        <Button
          colorScheme="blue"
          onClick={() => handleSearch(query)}
          isLoading={loadingUsers}
          disabled={isEmptyString(query)}
          sx={styles.button}
        >
          Search
        </Button>
      </Stack>

      {/* Information */}
      {!isEmptyString(query) ? (
        <Text>{`Showing users for ${query}`}</Text>
      ) : null}

      {/* List */}
      {users.map((user, index) => {
        return (
          <UserCard
            key={`user-card-${user.id}-${index}`}
            isOpen={isOpen && selectedUser?.id === user.id}
            onClick={() => handleSelectUser(user)}
            name={user.login}
          >
            {!isEmptyList(repos) && !loadingRepos ? (
              // List
              repos.map((repo, index) => {
                return (
                  <RepoCard
                    key={`repo-card-${index}`}
                    name={repo.name}
                    star={repo.stargazers_count}
                    description={repo.description}
                  />
                );
              })
            ) : isEmptyList(repos) && !loadingRepos ? (
              // Empty State
              <EmptyState />
            ) : (
              // Loading
              <Spinner />
            )}
          </UserCard>
        );
      })}
    </VStack>
  );
}

export default App;
