/*eslint-disable react-hooks/exhaustive-deps */
import React, { FC, memo, useEffect } from "react";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";

import { useGetPokemonData } from "../../hooks/useGetPokemonData";
import { PokemonCard } from "../organisms/Pokemoncard";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const PokemonPage: FC = memo(() => {
  const { loading, pokemonDatas, getPokemonData, onClickBack, onClickNext } =
    useGetPokemonData();

  useEffect(() => getPokemonData(), []);

  return (
    <>
      <div>
        {loading ? (
          <h1>読み込み中です</h1>
        ) : (
          <Wrap p={5} justify="center">
            {pokemonDatas.map((pokemon, i) => {
              return (
                <WrapItem p={{ base: 0, md: 8 }} key={i}>
                  <PokemonCard
                    name={pokemon.name}
                    imageURL={pokemon.sprites.front_default}
                    types={pokemon.types}
                    // types2={pokemon.types[1]?.type.name || null}
                    weight={pokemon.weight}
                    height={pokemon.height}
                    abilities={pokemon.abilities}
                  />
                </WrapItem>
              );
            })}
          </Wrap>
        )}
      </div>
      <Flex justify="center" alignItems="center" gap="2" mb="10">
        <PrimaryButton onClick={onClickBack}>戻る</PrimaryButton>
        <PrimaryButton onClick={onClickNext}>次へ</PrimaryButton>
      </Flex>
    </>
  );
});
