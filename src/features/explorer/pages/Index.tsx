import ImageBg from "@/assets/bg/bg-1.svg";
import SearchInput from "@/components/search-Input/Index";
import Header from "@/layouts/header/Index";
import { RiFireFill } from "react-icons/ri";
import Card from "../components/card/Index";
import { formatAmount } from "@/utils/format-amount/Index";
import { PiLockKeyFill } from "react-icons/pi";
import Table from "../layouts/table/Index";
import ScrollingCarouselFilters from "../components/scroll-filters/Index";
import { useGetMarkets } from "../services/get-markets/Index";
import { useMemo } from "react";
import { useGetAllAssets, useSearchAssets } from "../services/get-assets/Index";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "@/utils/localstorage/Index";

const Explorer = () => {
  const { data } = useGetMarkets();
  const { data: assetsData } = useGetAllAssets();
  const { data: assetsSearch, isError, isLoading, refetch } = useSearchAssets();
  const navigate = useNavigate();
  const collections = useMemo(() => {
    return (
      data?.data?.items?.markets?.map((cur: any) => ({
        label: cur.name,
        value: {
          _id: cur._id,
          name: cur.name,
          collectionAddress: cur.collectionAddress,
          imageUrl: cur.imageUrl,
          description: cur.description,
          creatorId: cur.creatorId,
        },
      })) || []
    );
  }, [data]);

  const assets = useMemo(() => {
    return (
      assetsData?.data?.items?.assets?.map((cur: any) => ({
        asset: cur.name,
        id: cur._id,
        assetAddress: cur.assetAddress,
        type: cur.assetType,
        amount: cur.currentValue,
        description: cur.description,
        imageUrl: cur.imageUrl,
        marketId: cur.marketId,
        ownerId: cur.ownerId,
        status: cur.status,
      })) || []
    );
  }, [assetsData]);

  const searchAssets = useMemo(() => {
    return (
      assetsSearch?.data?.items?.assets?.map((cur: any) => ({
        asset: cur.name,
        name: cur.name,
        id: cur._id,
        assetAddress: cur.assetAddress,
        type: cur.assetType,
        amount: cur.currentValue,
        description: cur.description,
        imageUrl: cur.imageUrl,
        marketId: cur.marketId,
        ownerId: cur.ownerId,
        status: cur.status,
      })) || []
    );
  }, [assetsSearch]);

  const handleCollection = (value: {
    _id: string;
    name: string;
    collectionAddress: string;
    imageUrl: string;
    description: string;
    creatorId: string;
  }) => {
    saveToLocalStorage("market", value);
    navigate(`/explorer/${value._id}`);
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${ImageBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
        className="w-full relative"
      >
        <Header />
        <div className="px-[3%] md:px-[2%] xl:px-[2%] mt-[3vh] md:mt-[5vh] xl:mt-[10vh] pt-10 pb-7">
          <h3 className="text-title-3 md:text-title-2 xl:text-title-1 text-white-1 mb-4">
            Asset Explorer for Real World Commerce
          </h3>
          <div className="bg-[#101010] rounded-md p-[0.5vw] xl:p-[1vw] border my-6 border-black-5 md:w-9/12 xl:w-1/2">
            <SearchInput
              isData={true}
              isError={isError}
              isLoading={isLoading}
              refetch={refetch}
              data={searchAssets}
              placeholder="Asset ID / Market ID"
            />
          </div>
          <div className="flex mt-4 bg-green-dim-11 border border-green-dark-10 rounded-md">
            <div className="bg-green-light-11 text-body-5 !font-medium md:text-sub-6 text-green-dark-6 py-2.5 md:py-4 flex gap-2 uppercase px-3 md:px-5 w-fit flex-shrink-0">
              Trending <span className="hidden md:inline">Markets</span>
              <RiFireFill className="text-[16px] md:text-[18px]" />
            </div>

            {collections.length > 0 && (
              <ScrollingCarouselFilters
                collectionFilters={collections}
                handleCollection={handleCollection}
              />
            )}
          </div>
        </div>
      </div>
      <div className="px-[1.5%] pt-2 md:pt-5 pb-5">
        <div className="flex card-carousel overflow-x-auto xl:overflow-x-visible gap-5">
          <Card
            title="Total Value Locked"
            stats={"$" + formatAmount(200000)}
            icon={<PiLockKeyFill className="text-[15px] md:text-[18px]" />}
          />

          <Card
            title="Total Markets"
            stats={formatAmount(13747)}
            icon={<PiLockKeyFill className="text-[15px] md:text-[18px]" />}
          />

          <Card
            title="Total Assets"
            stats={formatAmount(6737483)}
            icon={<PiLockKeyFill className="text-[15px] md:text-[18px]" />}
          />

          <Card
            title="Total Assets (Delivered)"
            stats={formatAmount(5993047)}
            icon={<PiLockKeyFill className="text-[15px] md:text-[18px]" />}
          />

          <Card
            title="Total Assets (en Route)"
            stats={formatAmount(13047)}
            icon={<PiLockKeyFill className="text-[15px] md:text-[18px]" />}
          />
        </div>
      </div>

      <div className="mt-4 bg-[#101010] border border-black-5 rounded-lg py-4 md:py-5 px-3 md:px-6 xl:mx-[1.5%]">
        <h4 className="text-white-1 text-title-5">Transactions</h4>
        <div className="my-5 card-carousel overflow-x-auto xl:overflow-x-visible">
          <div className="min-w-[850px]">
            {assets.length > 0 && <Table data={assets} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
