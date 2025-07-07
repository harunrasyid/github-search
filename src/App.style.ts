import type { SystemStyleObject } from "@chakra-ui/react";

const styles: { [key: string]: SystemStyleObject } = {
  page: {
    height: "100dvh",
    width: "100vw",
    paddingY: "16px",
    paddingX: "24px",
    alignItems: "flex-start",
    gap: "16px",
  },

  search: {
    alignItems: "flex-end",
    width: "100%",
    flexDirection: { base: "column", lg: "row" },
  },
  button: {
    width: { base: "100%", lg: "10%" },
  },
};

export { styles };
