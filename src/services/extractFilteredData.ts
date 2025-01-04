import { toRaw } from 'vue';

type DataObject = Record<string, any>;

export function extractFilteredData(data: DataObject): DataObject {
  const rawData = toRaw(data);

  const objectKeys = Object.keys(rawData);

  const filteredKeys = objectKeys.filter(key => !key.includes('_1'));

  const filteredData = filteredKeys.reduce((result, key) => {
    result[key] = rawData[key];
    return result;
  }, {} as DataObject);

  return filteredData;
}
