import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Header from "../components/Header";
import useGetFolderAsync from "../hooks/useGetFolderAsync";
import { useEffect, useState } from "react";
import { getSampleFolder } from "@/api";

export async function getStaticProps() {
  const { folder } = await getSampleFolder();

  return { props: { folder } }
}

export default function Shared({folder: data}) {
  const [searchValue, setsearchValue] = useState("");
  const [searchedData, setSearchedData] = useState(data.links);
  const handleInputChange = (value) => {
    setsearchValue(value);
  };

  useEffect(() => {
    const newDatas =
      data?.links?.filter(
        (item) => {
    if (
      item.description.includes(searchValue) ||
      item.url.includes(searchValue) ||
      item.title.includes(searchValue)
    ) {
      return item;
    }
  }
      );
  setSearchedData(newDatas);
}, [data?.links, searchValue]);

return (
  <>
    <Header isSticky />
    <Banner />
    <SearchBar handleInputChange={handleInputChange} />
    <Cards data={searchedData} />
  </>
);
}
