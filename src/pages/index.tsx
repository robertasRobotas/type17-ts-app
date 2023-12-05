import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Songs from "@/components/Songs/Songs";

type HomeType = {
  songs: Array<any>;
};

const Home: React.FC<HomeType> = ({ songs }) => {
  return (
    <>
      <Navbar title="Type 17" isLoading={false} />
      <Songs songs={songs} />
      <Footer copyright="type17" />
    </>
  );
};

export async function getServerSideProps() {
  const songs = await axios.get(
    "https://6554f24b63cafc694fe73e68.mockapi.io/songs"
  );
  return {
    props: {
      songs: songs.data,
    },
  };
}

export default Home;
