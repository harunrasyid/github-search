import { HStack, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { styles } from "./RepoCard.style";
import type { IRepoCardProps } from "./RepoCard.props";

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
