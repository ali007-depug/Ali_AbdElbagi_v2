import getAllPosts from "@/app/actions/getAllPosts";
import Posts from "./Posts";

export default async function PostWrapper({locale}:{locale:string}){
const data = await getAllPosts({ locale });
return <Posts data={data} />;
}