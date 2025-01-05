export function mergeValueWithDomStructure(
  values: Record<string, any>,
  domStructureForm: Array<Record<string, any>>,
): Array<Record<string, any>> {
  return domStructureForm.map((element) => {
    const key = element.key;
    if (key && values.hasOwnProperty(key)) {
      return {
        ...element,
        value: values[key],
      };
    }
    return element;
  });
}