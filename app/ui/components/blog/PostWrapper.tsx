import getAllPosts from "@/app/actions/getAllPosts";
import Posts from "./Posts";


export default async function PostWrapper({locale}:{locale:string}){
const data = await getAllPosts({ locale });
console.log("this is the posts :" + data)
return <Posts data={data} />;
}