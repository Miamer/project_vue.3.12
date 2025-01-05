type Item = Record<string, any>;

export function transformKeyToReference(items: Item[]): Item[] {
  return items.map((item) => {
    const {key, ...rest} = item;

    if (key) {
      return {...rest, reference: key};
    }

    return item;
  });
}