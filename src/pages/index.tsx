import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { flats } from "./flats";
import { useEffect, useState } from "react";
import { Flats } from "../components/Flats/Flats";
import { FlatType } from "../components/Flats/FlatsType";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState<Array<FlatType>>(flats);

  const onCardDelete = (id: number) => {
    const filteredFlats = data.filter((flat) => {
      return flat.id !== id;
    });

    setData(filteredFlats);
  };

  return (
    <>
      <Navbar title="Type 17" isUserActive={false} />

      <Flats
        flats={data}
        onCardDelete={onCardDelete}
        component={() => <div className={styles.title}>ALL FLATS</div>}
      />

      <Footer copyright="type17" />
    </>
  );
}
