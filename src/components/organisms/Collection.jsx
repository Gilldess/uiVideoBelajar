import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { useEffect, useState } from "react";
import Card from "../molecules/Card";
import Button from "../atoms/Button";
import imgRate from "../../assets/img/Rating.png";
import { getVideo } from "../../stores/redux/videoReducer";
import { useDispatch, useSelector } from "react-redux";

const Collection = () => {
  const dispatch = useDispatch();
  const { videos, status, error } = useSelector((state) => state.videoStore)
  useEffect(()=> {
    dispatch(getVideo())
  },[])
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
      {
        status === "loading" && <Text styleText="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/50 w-full h-full flex justify-center items-center" color="secondary" size="medium1">Loading...</Text>
      }
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
          <Button
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
          </Button>
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
          videos.length > 0 ? videos.map((item) => (
            <Card key={item.id} imgclass={item.imgvideo} heading={item.title} sub={item.sub} imgpp={item.avatar} name={item.name} job={item.job} imgrate={imgRate} rate={item.rate} price={item.harga}/>
          )) :
           <div className="text-center">
              <Text size="medium1" color="primary" styleText="mb-2">`(*&gt;﹏&lt;*)′</Text>
              <Text size="medium1" color="tertiary">Belum Ada Data</Text>
            </div>
        }
        {
          status === "failed" && <Text size="medium1" styleText="text-red-600 text-center mt-2">Gagal Memuat Data: {error}</Text>
        }
        </div>
    </div>
  );
};

export default Collection;
