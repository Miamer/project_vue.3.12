import { toRaw } from 'vue';

type DataObject = Record<string, any>;

export function extractFilteredData(data: DataObject): DataObject {
  const rawData = toRaw(data);

  const objectKeys = Object.keys(rawData);

  const filteredKeysRender = objectKeys.filter(key => !/_\d+$/.test(key));
  const buildDataRender = filteredKeysRender.reduce((result, key) => {
    result[key] = rawData[key];
    return result;
  }, {} as DataObject);


  const filteredKeysComponent = objectKeys.filter(key => /_\d+$/.test(key));
  const buildDataComponent = filteredKeysComponent.reduce((result, key) => {
    const value = rawData[key];
    if (value && typeof value === 'object' && ('value' in value || 'name' in value)) {
      result[key] = value.value || value.name;
    } else {
      result[key] = value;
    }

    return result;
  }, {} as DataObject);

  return {buildDataRender, buildDataComponent};
}
