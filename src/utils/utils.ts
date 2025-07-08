export const isEmptyList = (value: unknown) => {
  return Array.isArray(value) && value.length === 0;
};

export const isEmptyString = (value: unknown): boolean => {
  return typeof value === "string" && value.length === 0;
};
