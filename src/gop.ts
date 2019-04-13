export const getObjectProperty = (
  obj: object,
  path: string,
  defaultValue?: any,
): any => {
  const defaultReturn =
    typeof defaultValue !== "undefined" ? defaultValue : undefined;

  if (!obj || typeof obj !== "object" || typeof path !== "string") {
    return defaultReturn;
  }

  const paths = path.split(".");
  const [currentProperty] = paths;

  if (paths.length === 1) {
    return obj.hasOwnProperty(currentProperty)
      ? obj[currentProperty]
      : defaultReturn;
  }

  paths.shift();
  const newObj = obj.hasOwnProperty(currentProperty)
    ? obj[currentProperty]
    : undefined;
  return getObjectProperty(newObj, paths.join("."), defaultReturn);
};
