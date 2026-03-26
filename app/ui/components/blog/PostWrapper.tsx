import getAllPosts from "@/app/actions/getAllPosts";
import Posts from "./Posts";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function PostWrapper({locale}:{locale:string}){
const data = await getAllPosts({ locale });
console.log("this is the posts :" + data)
return <Posts data={data} />;
}