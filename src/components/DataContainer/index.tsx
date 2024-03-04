'use client'

import React, { useCallback, useEffect, useState } from 'react';
import { getAllData, getCategorie, searchByText } from "@/api/axios";
import { Popover, Rate, Spin } from "antd";
import Link from "next/link";
import SearchBar from '../SearchBar/index';
import convertRatingToScale5 from '@/utils/convertRating';
import getStartYear from '@/utils/getYear';
import CategoriesList from '../Categories';
import { Img, ImgList, ImgListContainer, ViewMoreButton } from './styles';

const DataContainer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(20);
  const [mediaList, setMediaList] = useState<any>([]);
  const [dataType, setDataType] = useState<string>('anime');
  const [isCategorie, setIsCategorie] = useState<boolean>(false);
  const [categorie, setCategorie] = useState<string>('');

  const handleRenderFirstData = useCallback(async () => {
    setLoading(true);
    try {
      const mediaData = await getAllData({type: dataType, offset: 0});
      setMediaList(mediaData.data);
    } catch (error) {
      console.error('Error while trying to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }, [dataType]);

  useEffect(() => {
    handleRenderFirstData()
  }, [handleRenderFirstData]);

  const handleDataTypeChange = useCallback(async (newDataType: string) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, [categorie, dataType, isCategorie, offset]);

  const handleCategorieChange = useCallback(async (categorieName: string) => {
    setLoading(true);
    try {
      setIsCategorie(true);
      setCategorie(categorieName);
      setMediaList([]);
      const newData = await getCategorie({type: dataType, categorie: categorieName,offset: offset})
      setMediaList(newData.data);
    } catch (error) {
      console.error('Error while trying to fetch data:', error);
    } finally {
      setLoading(false);
    }
    
  }, [dataType, offset]);

  async function viewMore () {
    setLoading(true);
    let mediaData;
    if (isCategorie) {
      mediaData = getCategorie({type: dataType, categorie: categorie,offset: offset}).then((res) => {
        setMediaList((prev: any) => [...prev,...res.data]);
        setOffset((prev) => prev + 20)
      });
      setLoading(false);

    } else {
      mediaData = getAllData({type: dataType, offset: offset}).then((res) => {
        setMediaList((prev: any) => [...prev,...res.data]);
        setOffset((prev) => prev + 20)
      });
      setLoading(false);
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

  const handleSearchTextInput = async (searchText: string) => {
    setLoading(true);
    try {
      setMediaList([]);
      const results = await searchByText(dataType, searchText); 
      setMediaList(results.data);
    } catch (error) {
      console.error('Error while trying to fetch data:', error);
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <Spin spinning={loading} size='large'>
      <SearchBar onCategorieChange={handleCategorieChange} onSearchText={handleSearchTextInput} onDataTypeChange={handleDataTypeChange} />
      {isCategorie && <h2>{categorie}</h2>}
      
        <ImgListContainer>
          {mediaList?.map((item: any, index: any) => (
            <ImgList key={index}>
            <Popover 
              content={handlePopoverContent(item.attributes.averageRating)} 
              title={`${item.attributes.canonicalTitle} (${handleFirstYear(item.attributes.startDate)})`}
            >
              <Link  href={`details/${item.id}?filter=${item.type}`}><Img src={item.attributes.posterImage.tiny} /></Link>
            </Popover>
            </ImgList>
          ))}
        </ImgListContainer>
      
      <ViewMoreButton><span onClick={() => viewMore()}>View More</span></ViewMoreButton>
      <CategoriesList onCategorieChange={handleCategorieChange}/>
    </Spin>
  )
};

export default DataContainer;