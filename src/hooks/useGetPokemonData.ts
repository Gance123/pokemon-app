import { useCallback, useState } from "react";

import { Pokemondata, PokemonNameAndDetailofURL } from "../types/PokemonData";
import { getAllPokemon, getPokemon } from "./usePokemon";

export const useGetPokemonData = () => {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonDatas, setPokemonDatas] = useState<Array<Pokemondata>>([]);
  const [nextURL, setNextURL] = useState<string>("");
  const [prevURL, setPrevURL] = useState<string>("");

  const getPokemonData = useCallback(() => {
    const fechPokemonData = async () => {
      // 全てのポケモンデータを取得 + json化
      // 非同期処理を伴う関数実行時にawait・・・getAllPokemon()を待って次の処理に移る
      let res = await getAllPokemon(initialURL);

      // 各ポケモンの"詳細な"データを取得 + json化
      await loadPokemon(res.results);

      console.log(res);
      setNextURL(res.next); //次の20匹の情報が入ってるurl
      setPrevURL(res.previous); //前の20匹の情報が入ってるurl

      setLoading(false);
    };
    fechPokemonData();
  }, []);

  const loadPokemon = async (datas: Array<PokemonNameAndDetailofURL>) => {
    //datas = res.results.data群
    let _pokemonDatas = await Promise.all(
      datas.map((data) => {
        let pokemonRecord = getPokemon(data.url);
        return pokemonRecord;
      })
    );
    setPokemonDatas(_pokemonDatas);
  };

  const onClickNext = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const onClickBack = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  return {
    setLoading,
    loading,
    getPokemonData,
    pokemonDatas,
    loadPokemon,
    onClickBack,
    onClickNext,
  };
};
