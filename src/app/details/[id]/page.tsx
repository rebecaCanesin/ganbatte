import React from 'react';
import { getAnimeById, getMangaById } from "@/api/axios";
import VideoModal from "@/components/TrailerModal";
import convertRatingToScale5 from "@/utils/convertRating";
import getStartYear from "@/utils/getYear";
import { Rate } from "antd";
import './styles.css';

export default async function Details({params, searchParams }: { params: { id: any }, searchParams: { filter: string} }) {
  const mediaId = params.id;
  const filter = searchParams.filter;

  async function fetchData() {
    switch(filter) {
      case 'anime':
        const anime = await getAnimeById(mediaId);
        return anime;
        
      case 'manga':
        const manga = await getMangaById(mediaId);
        return manga;
        
      default:
        return null;
    }
  }
  const pageData = await fetchData();

  const { attributes } = pageData.data;

  const year = getStartYear(attributes.startDate);

  const handleRating = (averageRating: number) => {
    const rating = convertRatingToScale5(averageRating);

      return (
        <Rate disabled defaultValue={rating} />
      )
  };

  return (
    <div className="MainContainer">
      <div className="ImageInfoContainer">
        <img src={attributes.posterImage.small} className="Img" />
        <div className="InfoContainer">
          <h1>{`${attributes.canonicalTitle} (${year})`}</h1>
          <div>{attributes.synopsis}</div>
        </div>
      </div>
      <div className="TechnicalInfoContainer">
        <h3>Ficha técnica</h3>
        <p>Average Rating: {handleRating(attributes.averageRating)}</p>
        <p>Age rating: {attributes.ageRatingGuide || 'Information not available'}</p>
        <p>Status: {attributes.status || 'Information not available'}</p>
        <p>Number of episodes: {attributes.episodeCount || 'Information not available'}</p>
        <p>Show Type: {attributes.showType || 'Information not available'}</p>
      </div>
      {filter === 'anime' && (
        attributes.youtubeVideoId ? (
          <div className="TrailerContainer">
            <div className="TrailerText">Watch Trailer</div>
            <VideoModal videoId={attributes.youtubeVideoId} />
          </div>
        ) : (
          <div className="TrailerContainer noTrailer">
            <div className="TrailerText">Trailer not available</div>
          </div>
        )
      )}
    </div>
)};