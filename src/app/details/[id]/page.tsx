import { getAnimeById, getCharacterById, getCharactersList, getMangaById } from "@/api/axios";
import VideoModal from "@/components/TrailerModal";
import convertRatingToScale5 from "@/utils/convertRating";
import getStartYear from "@/utils/getYear";
import { Carousel, Rate } from "antd";

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

  const { attributes, relationships } = pageData.data;

  const year = getStartYear(attributes.startDate);

  const handleRating = (averageRating: number) => {
    const rating = convertRatingToScale5(averageRating);

      return (
        <Rate disabled defaultValue={rating} />
      )
  };

  return (
   <div style={{display:'flex', flexDirection: 'column'}}>
    <h1>Details Page</h1>
    <div style={{display:'flex', flexDirection:'row', flexShrink:1}}>
      <img src={attributes.posterImage.small} />
      <div style={{display:'flex', flexDirection:'column'}}>
        <div>{`${attributes.canonicalTitle} (${year})`}</div>
        <div>{attributes.synopsis}</div>
      </div>
    </div>
    <div>
      <span>Ficha técnica</span>
      <p>Average Rating: {handleRating(attributes.averageRating)}</p>
      <p>Age rating: {attributes.ageRatingGuide || ''}</p>
      <p>Status: {attributes.status || ''}</p>
      <p>Number of episodes: {attributes.episodeCount || ''}</p>
      <p>Show Type: {attributes.showType || ''}</p>
    </div>
    {filter === 'anime' && (attributes.youtubeVideoId ? (
      <>
        <div>Container de trailer</div>
        <VideoModal videoId={attributes.youtubeVideoId} />
      </>
      ) : (
        <div>Trailer Not Available</div> 
      ))}
  </div>
  );
}