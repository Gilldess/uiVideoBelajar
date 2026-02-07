import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { useState } from "react";
import Card from "../molecules/Card";
import { collectionVideo } from "../../config/dataVideo";

const Collection = () => {
  const filters = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];
  const [activeFilter, setActiveFilter] = useState("Semua Kelas");
  return (
    <div className="flex flex-col md:gap-8 gap-6">
      <div>
        <Heading level={3} size="medium" color="secondary">
          Koleksi Video Pembelajaran Unggulan
        </Heading>
        <Text size="medium1" styleText="mt-2.5" color="primary">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </Text>
      </div>
      <div className="md:flex hidden gap-9">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
            relative pb-2 font-medium transition-all duration-300 ease-in-out
            ${
              activeFilter === filter
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-[#333333AD] border-b-2 border-transparent hover:text-black hover:border-black"
            }
          `}
          >
            {filter}
          </button>
        ))}
      </div>
      <select className="md:hidden border-2 border-[#F64920] p-2 rounded-md">
        <option>Semua Kelas</option>
        <option>Pemasaran</option>
        <option>Desain</option>
        <option>Pengembangan Diri</option>
        <option>Bisnis</option>
      </select>
      <div className="flex flex-wrap gap-4 xl:gap-6">
        {
          collectionVideo.map((item) => (
            <Card key={item.id} imgclass={item.img} alt={item.alt} heading={item.title} sub={item.sub} imgpp={item.profil} name={item.name} job={item.job} imgrate={item.imgrate} rate={item.rate} price={item.price}/>
          ))
        }
        </div>
    </div>
  );
};

export default Collection;
