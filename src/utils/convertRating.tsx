export default function convertRatingToScale5(rating: number): number {
  if (rating < 0 || rating > 100) {
      throw new Error('Rating must be inside the interval from 0 to 100.');
  }
  
  return Math.round((rating / 100) * 5);
};
