export type DomStructure = {
  type?: string;
  key?: string;
  reference?: string;
  label?: string;
  disabled?: boolean;
  validation?: boolean;
  required?: boolean;
  value?: string | number;
  options?: {
    items: { value: string | number; label: string }[];
  };
};