export type Pokemondata = {
  name: string;
  sprites: {
    front_default: string; //url
  };
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  abilities: [{ ability: { name: string } }, { ability: { name: string } }?];
};
export type PokemonNameAndDetailofURL = {
  //res.result{}
  name: string;
  url: string;
};
