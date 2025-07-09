import { HStack, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { styles } from "./RepoCard.style";
import type { IRepoCardProps } from "./RepoCard.props";

/**
 * RepoCard component displays a repository name, star count, and description in a styled card.
 *
 * @component
 * @param {IRepoCardProps} props - The props for the RepoCard component.
 * @param {string} props.name - The name of the repository.
 * @param {number} props.star - The number of stars the repository has.
 * @param {string} props.description - A short description of the repository.
 */
export const RepoCard = ({ name, star, description }: IRepoCardProps) => {
  return (
    <VStack sx={styles.container}>
      {/* Title & Star */}
      <HStack sx={styles.titleContainer}>
        {/* Title */}
        <Text fontSize={"lg"} fontWeight={"bold"}>
          {name}
        </Text>

        {/* Stars */}
        <HStack>
          <Text>{`${star}`}</Text>
          <StarIcon sx={styles.starIcon} />
        </HStack>
      </HStack>

      {/* Description */}
      <Text textAlign={"left"}>{description}</Text>
    </VStack>
  );
};
