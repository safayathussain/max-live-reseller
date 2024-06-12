import HistoryTable from "@/components/Dashboard/Table/HistoryTable";

const page = () => {
  return (
    <div>
      <div>
        <p className="text-xl font-bold text-[#5C2D95]">Beans Send History</p>
      </div>
      <div className="bg-white rounded-lg w-full pt-8 flex justify-center items-center mt-6 ">
        <div className="  w-full px-5 max-w-[calc(100vw-50px)] max-h-[calc(100vh-259px)] overflow-x-scroll">
          <HistoryTable/>
       
        </div>
      </div>
    </div>
  );
};

export default page;
