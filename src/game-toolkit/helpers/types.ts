export type Context = {
  slots: { default: () => { type: { name: string; plug: () => void } }[] };
};

type VueComponentTypeBase = {
  name: string;
  plug: () => void;
};

export type VueComponentType = VueComponentTypeBase;

export type VueComponent = {
  type: VueComponentTypeBase;
};
