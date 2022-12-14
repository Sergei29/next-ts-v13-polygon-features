import React from "react";
import Image from "next/image";
import Head from "next/head";

import classes from "./Pokemons.module.css";

const BULBASAUR_IMG_URL = [
  "https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png",
  "https://archives.bulbagarden.net/media/upload/thumb/6/68/Pawmi.png/250px-Pawmi.png",
  "https://archives.bulbagarden.net/media/upload/0/0d/025Pikachu.png",
];

const PokemonsPage = () => {
  return (
    <>
      <Head>
        <title>Pokemons Page</title>
        <meta name="description" content="Next Pokemons Page" />
      </Head>

      <>
        <h1>Pokemons Page</h1>
        <div className={classes.imagesListContainer}>
          <div>
            <Image src={BULBASAUR_IMG_URL[0]} alt="Bulbasour" fill />
          </div>
          <div>
            <Image src={BULBASAUR_IMG_URL[1]} alt="Pawmi" fill />
          </div>
          <div>
            <Image src={BULBASAUR_IMG_URL[2]} alt="Pikachu" fill />
          </div>
        </div>
      </>
    </>
  );
};

export default PokemonsPage;
