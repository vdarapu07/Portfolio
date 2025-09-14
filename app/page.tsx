import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";
import data from "../public/data1.json";
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

export default function Page() {
  return (
    <>
      {data ? (
        <HomePage data={data} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}