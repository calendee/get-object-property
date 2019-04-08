export const getObjectProperty=(obj: object, path: string, defaultValue?: any): any => {
  let newObj = {};
  const defaultReturn = typeof defaultValue !== 'undefined' ? defaultValue : undefined;

  if (!obj || typeof obj !== 'object' || typeof path !== 'string') {
    return defaultReturn;
  }

  const paths = path.split('.');
  const [ property ] = paths;

  if (paths.length === 1) {
    return obj.hasOwnProperty(property) ? obj[property] : defaultReturn;
  } 

  paths.shift();
  newObj = obj.hasOwnProperty(property) ? obj[property] : {}
  return getObjectProperty(newObj, paths.join('.'), defaultReturn);
}
