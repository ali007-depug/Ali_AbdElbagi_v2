import  {getAllPosts} from "../index";
import Posts from "./Posts";
export default async function PostWrapper({ locale }: { locale: string }) {
  const data = await getAllPosts({ locale });
  return <Posts data={data} />;
}
