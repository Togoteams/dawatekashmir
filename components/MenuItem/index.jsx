import { Bike } from "lucide-react";
import Image from "next/image";

const MenuItem = ({
  imageSrc,
  item,
  rating,
  supplier,
  rate,
  showModalClick,
}) => {
  return (
    <>
      <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
        <div className="dz-media w-[100px] min-w-[100px]">
          <Image
            src={imageSrc}
            height={100}
            width={108}
            alt="/"
            className="h-full"
          />
        </div>
        <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
          <div className="dz-head mb-2 flex items-center justify-between">
            <h6 className="dz-name mb-0 flex items-center text-base">
              <svg
                className="mr-[10px]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
              </svg>
              <span
                className="text-black font-rubik font-medium cursor-pointer"
                onClick={showModalClick}
              >
                {item}
              </span>
            </h6>

            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
              <i className="fa-solid fa-star"></i> {rating}
            </div>
          </div>

          <div className="sm:flex block justify-between">
            <ul className="flex mx-[-10px]">
              <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik">
                By{" "}
                <span className="text-primary font-medium font-rubik">
                  {" "}
                  {supplier}
                </span>
              </li>
              <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik flex">
                <Bike size={24} color="#519400" strokeWidth={0.75} />
                &nbsp; 30 min
              </li>
            </ul>
            <p className="mb-0">
              <span className="text-lime-800 font-weight-800 font-rubik">
                {rate}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuItem;
