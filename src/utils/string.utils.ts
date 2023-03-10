export default {
  toSnakeCase: (str: string) => {
    return str.trim().toLowerCase().replace(/\s+/g, '_');
  },
};
