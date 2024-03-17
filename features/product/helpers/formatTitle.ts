export const formatTitle = (title: string | undefined) => {
  return title ? title.charAt(0).toUpperCase() + title.slice(1) : "";
};
