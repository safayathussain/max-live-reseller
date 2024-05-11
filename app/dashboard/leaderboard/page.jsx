import Image from "next/image";
import logo from "@/public/logo.svg";

const Page = () => {
  // Sample data for demonstration
  const data = Array.from({ length: 10 }, (_, index) => ({
    id: 564653148 + index,
  }));

  return (
    <div>
      <div>
        <p className="text-xl text-[#5C2D95] font-bold">This Month Ranking</p>
      </div>
      <div className="bg-white p-4 mt-6 rounded-lg">
        {data.map((item, index) => (
          <div key={index} className="flex p-1 sm:p-5 bg-[#EEF0F6] rounded-md border-[#5C2D95] border border-opacity-50 items-center justify-between mb-2">
            <div className='flex items-center'>
              <div>
                <Image src={logo} className="size-14" alt=""/>
              </div>
              <div className="ml-2 text-[#5C2D95]">
                <p className="text-xs sm:text-base">Reseller Portal BD Agency ID: {item.id}</p>
                <p className="text-[9px]">ID: {item.id}</p>
              </div>
            </div>
            <div>
              <p className="text-[#5C2D95] font-bold text-xs mr-2">{item.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
