export default function getStartYear(date: string): number {
  const ano = new Date(date).getFullYear();
  if (!isNaN(ano)) {
      return ano;
  }
  throw new Error('INvalid date: ' + date);
}