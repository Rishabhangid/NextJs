import FetchData from "@/Components/FetchData";
import GlobalCssUse from "@/Components/GlobalCssUse";
import LearnRoute from "@/Components/learn";
// import LearnImage from "@/Components/learnImage";
// import LearnImage from "@/Components/LearnImage";
import Image from "next/image";
import submitForm from "./submitForm/page";






export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <submitForm/>
      {/* <h1 className="font-bold text-red-600">Hello </h1> */}
      {/* using usae route */}
      <LearnRoute/>

      {/* // Using global css
      <GlobalCssUse/> */} */

      {/* adding image */}
      {/* <LearnImage /> */}
      {/* fetching data */}
      {/* <FetchData/> */}

      
    </div>
  );
}
