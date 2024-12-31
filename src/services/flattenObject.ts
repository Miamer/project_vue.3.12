export function initFormData(data: any) {
  const result = {};

  function flattenObject(obj: any, parentKey = '') {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const currentKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        flattenObject(value, currentKey);
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {

          if (typeof item === 'string' || typeof item === 'number') {
            result[`${currentKey}[${index}]`] = item;
          } else {
            flattenObject(item, `${currentKey}[${index}]`);
          }
        });
      } else {
        result[currentKey] = value;
      }
    });
  }

  flattenObject(data);
  return result;
}