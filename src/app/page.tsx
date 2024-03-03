import Image from "next/image";
import styles from "./page.module.css";
import { getAllData } from "@/api/axios";
import DataContainer from "@/components/DataContainer";

export default async function Home() {
  const type = 'anime';
  const mediaData = await getAllData({type: type, offset: 0})

  return (
    <>
      {/* <SEO SEOinfo={seoInfo} /> */}
      <DataContainer data={mediaData} />
    </>
  );
};