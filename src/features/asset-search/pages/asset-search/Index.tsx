import ImageBg from "@/assets/bg/bg-2.svg";
import { KeysClipboard } from "@/features/dashboard/pages/dashboard/Index";
import { CopyText } from "@/features/explorer/components/table-data/Index";
import Header from "@/layouts/header/Index";
import { formatAmount } from "@/utils/format-amount/Index";
import { getFromLocalStorage } from "@/utils/localstorage/Index";
//import { useState } from "react";
import { FaCheck, FaWallet } from "react-icons/fa6";

const AssetSearch = () => {
  const asset: any = getFromLocalStorage("asset", "not found");
  const activeStage: number = 4;
  const barPercent =
    (activeStage / 6) * 100 < 100 ? ((activeStage + 1) / 6) * 100 : 100;

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
              className="col-span-12 md:col-span-4 xl:col-span-2 block w-full object-cover"
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
              value={asset?.assetAddress}
              icon={<FaWallet />}
            />
          </div>
        </div>
      </div>
      <div className=" pt-7 pb-7">
        <div className="mt-3">
          <div className="relative border-t-2 border-dashed w-full border-[#555555] hidden xl:block">
            <div
              className="absolute left-0 top-0 z-10 h-full border-t-2 border-dashed border-[#97E8AB]"
              style={{ width: `${barPercent}%` }}
            ></div>
          </div>

          <div className="relative z-50 -mt-4 flex flex-col gap-14 xl:gap-0 xl:flex-row xl:items-center justify-between">
            <div className="absolute left-4 z-0 top-0 border-l-2 border-dashed h-full  border-[#555555] block xl:hidden">
              <div
                className="absolute -left-[2px] top-0 z-10 border-l-2 border-dashed border-[#97E8AB]"
                style={{ height: `${barPercent}%` }}
              ></div>
            </div>

            <div className="flex flex-row gap-2 xl:gap-0 xl:flex-col items-center z-4 relative">
              <Checkbox
                checked={activeStage >= 1}
                current={activeStage === 0}
              />
              <p className="xl:mt-8 text-center text-title-5  text-white-1">
                Order Placed
              </p>
            </div>
            <div className="flex flex-row gap-2 xl:gap-0 xl:flex-col items-center z-4 relative">
              <Checkbox
                checked={activeStage >= 2}
                current={activeStage === 1}
              />
              <p className="xl:mt-8 text-center text-title-5  text-white-1">
                Pending Confirmation
              </p>
            </div>
            <div className="flex flex-row gap-2 xl:gap-0 xl:flex-col items-center z-4 relative">
              <Checkbox
                checked={activeStage >= 3}
                current={activeStage === 2}
              />
              <p className="xl:mt-8 text-center text-title-5  text-white-1">
                Waiting to be Shipped
              </p>
            </div>
            <div className="flex flex-row gap-2 xl:gap-0 xl:flex-col items-center z-4 relative">
              <Checkbox
                checked={activeStage >= 4}
                current={activeStage === 3}
              />
              <p className="xl:mt-8 text-center text-title-5  text-white-1">
                Shipped
              </p>
            </div>
            <div className="flex flex-row gap-2 xl:gap-0 xl:flex-col items-center z-4 relative">
              <Checkbox
                checked={activeStage >= 5}
                current={activeStage === 4}
              />
              <p className="xl:mt-8 text-center text-title-5  text-white-1">
                Available for Pickup
              </p>
            </div>
            <div className="flex flex-row gap-2 xl:gap-0 xl:flex-col items-center z-4 relative">
              <Checkbox
                checked={activeStage >= 6}
                current={activeStage === 5}
              />
              <p className="xl:mt-8 text-center text-title-5  text-white-1">
                Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetSearch;

const Checkbox = ({
  checked,
  current,
}: {
  checked: boolean;
  current: boolean;
}) => {
  if (checked && !current) {
    return (
      <div className="w-8 h-8 rounded-full bg-[#97E8AB] flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-[#28AE49] flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#18692C] flex items-center justify-center">
            <FaCheck className="text-white-1 text-[10px]" />
          </div>
        </div>
      </div>
    );
  } else if (!checked && current) {
    return (
      <div className="w-8 h-8 rounded-full bg-[#97E8AB] flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-[#28AE49] flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#BAF0C7] flex items-center justify-center"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-[#555555] flex items-center justify-center">
      <div className="w-6 h-6 rounded-full bg-[#2B2B2B] flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-[#101010] flex items-center justify-center"></div>
      </div>
    </div>
  );
};
