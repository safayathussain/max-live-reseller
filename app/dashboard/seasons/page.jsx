import Image from "next/image";
import logo from "@/public/logo.svg";

const Page = () => {
  const data = Array.from({ length: 12 }, (_, index) => ({
    userAgent:
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    ip: "37.111.207.15",
    startedAt: "Apr 6, 2024 3:41 AM",
    lastActivity: "10 hours ago",
    id: index,
  }));

  return (
    <div>
      <div>
        <p className="text-xl text-[#5C2D95] font-bold">This Month Ranking</p>
      </div>
      <div className="bg-white p-4 mt-6 rounded-lg grid sm:grid-cols-3 grid-cols-1 gap-4 text-[9px] font-medium">
        {data.map((item) => (
          <div key={item.id} className="border-[#5C2D95] border border-opacity-50 p-4 rounded-xl">
            <div>
              <p>{item.userAgent}</p>
              <p>Ip: {item.ip}</p>
              <p>Started At: {item.startedAt}</p>
              <p>Last Activity: {item.lastActivity}</p>
            </div>
            <div className="mt-2">
              <button className="bg-white border border-error text-error px-2 py-1 hover:bg-error hover:text-white">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
