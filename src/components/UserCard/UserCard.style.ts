import type { SystemStyleObject } from "@chakra-ui/react";

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    width: "100%",
    gap: "16px",
  },

  button: {
    padding: "0px 0px",
    width: "100%",
  },
  header: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#e4e4e7",
    justifyContent: "space-between",
    borderRadius: "4px",
  },

  icon: {
    width: "24px",
    height: "24px",
  },

  children: { gap: "8px" },
};

export { styles };
