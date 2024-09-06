import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
const useGenere = () => useData<Genres>("/genres");
export default useGenere;
