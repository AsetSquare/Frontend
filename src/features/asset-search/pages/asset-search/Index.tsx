import ImageBg from "@/assets/bg/bg-2.svg";
import { KeysClipboard } from "@/features/dashboard/pages/dashboard/Index";
import { CopyText } from "@/features/explorer/components/table-data/Index";
import Header from "@/layouts/header/Index";
import { formatAmount } from "@/utils/format-amount/Index";
import { getFromLocalStorage } from "@/utils/localstorage/Index";
import { FaWallet } from "react-icons/fa6";

const AssetSearch = () => {
  const asset: any = getFromLocalStorage("asset", "not found");

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ImageBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
        className="w-full relative border border-black-5 rounded-md"
      >
        <Header />
        <div className="px-[4.5%] md:px-[3%] xl:px-[4.5%] mt-[1vh] md:mt-[2vh] xl:mt-[5vh] pt-7 pb-7">
          <div className="grid grid-cols-12 gap-5">
            <img
              src={asset?.imageUrl}
              alt=""
              className="col-span-12 md:col-span-4 xl:col-span-2 block"
            />
            <div className="col-span-12 md:col-span-8 xl:col-span-5 flex flex-col gap-2">
              <div className="bg-black-6 border border-black-5 rounded-md py-2 px-3 flex items-center gap-5 justify-between">
                <p className="text-body-4 text-black-4">Asset Name</p>
                <p className="text-body-4 text-white-1">{asset?.asset}</p>
              </div>
              <div className="bg-black-6 border border-black-5 rounded-md py-2 px-3 flex items-center gap-5 justify-between">
                <p className="text-body-4 text-black-4">Price</p>
                <p className="text-body-4 text-white-1">
                  ${formatAmount(asset?.amount)}
                </p>
              </div>

              <div className="bg-black-6 border border-black-5 rounded-md py-2 px-3 flex items-center gap-5 justify-between">
                <p className="text-body-4 text-black-4">Status</p>
                <p className="text-body-4 text-green-dark-6 border-[0.67px] border-[#10461D] rounded bg-[#07190B] py-2 px-2.5">
                  {asset?.status}
                </p>
              </div>
              <div className="bg-black-6 border border-black-5 rounded-md py-2 px-3 flex items-center gap-5 justify-between">
                <p className="text-body-4 text-black-4">Owner</p>
                <CopyText value={asset?.ownerId} length={12} />
              </div>
            </div>
            <div className="col-span-12 md:col-span-12 xl:col-span-5 bg-black-6 border border-black-5 rounded-lg py-6 px-3.5 md:px-7">
              <h4 className="text-title-5 text-green-dark-6">About Market</h4>
              <p className="text-body-4 mt-2.5 text-white-5">
                {asset?.description}
              </p>
            </div>
          </div>
          <div className="mt-5 mb-1 xl:mb-5">
            <KeysClipboard
              title="Market ID"
              value={asset?.marketId}
              icon={<FaWallet />}
            />
            <KeysClipboard
              title="Asset ID"
              value={asset?.id}
              icon={<FaWallet />}
            />
          </div>
        </div>
      </div>
      <div className=" pt-7 pb-7"></div>
    </div>
  );
};

export default AssetSearch;
