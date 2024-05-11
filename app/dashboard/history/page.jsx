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
          {/* <table className="w-full text-sm  rtl:text-right text-center whitespace-nowrap">
            <thead className="text-xs text-[#B5BFC9]  uppercase  ">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium text-sm ">
                  <div className="flex items-center justify-center">
                    sl
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-sm ">
                  <div className="flex items-center justify-center">
                    full name
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-sm">
                  <div className="flex items-center justify-center">
                    email address
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-sm">
                  <div className="flex items-center justify-center">
                    date
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-sm">
                  <div className="flex items-center justify-center">
                    beans
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
              <tr className="bg-white border-b  text-[#68727B]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-[#1B2126]">
                  Safayat hussain
                </td>
                <td className="px-6 py-4">safayat@gmail.com</td>
                <td className="px-6 py-4">12 april, 2023</td>
                <td className="px-6 py-4">1232</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default page;
