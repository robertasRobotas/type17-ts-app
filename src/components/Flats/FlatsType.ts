import React from "react";

export type FlatType = {
  id: number;
  miestas: string;
  kaina: number;
  plotas: number;
  plotoVienetas: string;
  kambariuSkaicius: number;
};

export type FlatsType = {
  flats: Array<FlatType>;
  onCardDelete: (id: number) => void;
  component: React.FC;
};
