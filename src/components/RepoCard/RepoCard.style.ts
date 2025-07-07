import type { SystemStyleObject } from "@chakra-ui/react";

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    width: "100%",
    backgroundColor: "#d4d4d8",
    padding: "16px",
    borderRadius: "4px",
    alignItems: "flex-start",
  },

  titleContainer: {
    width: "100%",
    justifyContent: "space-between",
  },
  starIcon: {
    width: "24px",
    height: "24px",
  },
};

export { styles };
