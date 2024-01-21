export interface House {
  id: string;
  name: string;
  founder: string;
  houseColours?: string | null;
  commonRoom: string;
  animal: string;
  element: string;
  heads: Array<Head>;
  traits: Array<Trait>;
  ghost: string;
}

interface Head {
  id: string;
  firstName: string;
  lastName: string;
}

interface Trait {
  id: string;
  name: string;
}
