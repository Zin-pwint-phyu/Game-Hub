import useData from "./useData";

interface PlatformSelectorProps {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () => useData<PlatformSelectorProps>("/platforms");
export default usePlatform;
