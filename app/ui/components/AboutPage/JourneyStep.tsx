import Image from "next/image";
interface Props {
  title:string;
  text:string;
  imgSrc:string;
}

export default function JourneyStep({title,text,imgSrc}:Props) {
  return (
    <div className="relative p-4 rounded-3xl flex flex-col lg:flex-row gap-10 items-center">
      <div className="lg:w-2/3">
        <h4 className="mb-4 text-4xl font-bold text-slate-800">
            {title}
        </h4>
        <p className="text-slate-600 text-lg  border-s-4 border-blue-500 ps-4">
            {text}
        </p>
      </div>

      <div className="lg:w-1/3 w-full">
        <Image
          src={imgSrc}
          alt={`${imgSrc} image`}
          className="rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-300"
          width={400}
          height={200}
        />
      </div>
    </div>
  );
}
