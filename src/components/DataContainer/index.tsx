'use client'

import React, { useCallback, useEffect, useState } from 'react';
import { getAllData, getCategorie } from "@/api/axios";
import { Button, Popover, Rate } from "antd";
import Link from "next/link";
import SearchBar from '../SearchBar';
import convertRatingToScale5 from '@/utils/convertRating';
import getStartYear from '@/utils/getYear';
import CategoriesList from '../Categories';


interface DataProps {
  data?:any,
  type?: string;
}

const DataContainer = ({ data, type='anime' }: DataProps) => {
  const [offset, setOffset] = useState<number>(20);
  const [mediaList, setMediaList] = useState<any>(data.data);
  const [dataType, setDataType] = useState<string>(type);
  const [isCategorie, setIsCategorie] = useState<boolean>(false);
  const [categorie, setCategorie] = useState<string>('');

  const handleDataTypeChange = useCallback(async (newDataType: string) => {
    try {
      setMediaList([]);
      setDataType(newDataType);
 
    if (isCategorie) {
      const newData = await getCategorie({type: dataType, categorie: categorie,offset: offset})
      setMediaList(newData.data)
    } else {
      const newData = await getAllData({ type: newDataType, offset: 0 });
      setMediaList(newData.data);
    };

    } catch (error) {
      console.error('Error while trying to fetch data:', error);
    }
  }, []);

  const handleCategorieChange = useCallback(async (categorieName: string) => {
    setIsCategorie(true);
    setCategorie(categorieName);
    setMediaList([]);
    const newData = await getCategorie({type: dataType, categorie: categorieName,offset: offset})
    setMediaList(newData.data);
  }, []);

  async function viewMore () {
    let mediaData;
    if (isCategorie) {
      mediaData = getCategorie({type: dataType, categorie: categorie,offset: offset}).then((res) => {
        setMediaList((prev: any) => [...prev,...res.data]);
        setOffset((prev) => prev + 20)
      });

    } else {
      mediaData = getAllData({type: dataType, offset: offset}).then((res) => {
        setMediaList((prev: any) => [...prev,...res.data]);
        setOffset((prev) => prev + 20)
      });
    };
    return mediaData;
  };

  const handlePopoverContent = (averageRating: any) => {
    const rating = convertRatingToScale5(averageRating);

    return (
      <Rate disabled defaultValue={rating} />
    )
  };

  const handleFirstYear = (startDate: string) => {
    const firstYear = getStartYear(startDate);
    return firstYear;
  };

  return (
    <>
      <SearchBar onDataTypeChange={handleDataTypeChange} />

      {isCategorie && <h1>{categorie}</h1>}
      
        <div style={{display:'flex', flexWrap: 'wrap'}}>
          {mediaList?.map((item: any, index: any) => (
            <Popover 
              content={handlePopoverContent(item.attributes.averageRating)} 
              title={`${item.attributes.canonicalTitle} (${handleFirstYear(item.attributes.startDate)})`}
            >
              <Link key={index} href={`details/${item.id}?filter=${item.type}`}><img src={item.attributes.posterImage.tiny} /></Link>
            </Popover>
          ))}
        </div>
      
      <Button onClick={() => viewMore()}>View More</Button>
      <CategoriesList onCategorieChange={handleCategorieChange}/>
    </>
  )
};

export default DataContainer;