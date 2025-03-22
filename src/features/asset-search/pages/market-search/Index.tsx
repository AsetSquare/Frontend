import ImageBg from "@/assets/bg/bg-2.svg";
import assetImg from "@/assets/images/asset.png";
import SearchInput from "@/components/search-Input/Index";
import { KeysClipboard } from "@/features/dashboard/pages/dashboard/Index";
import { CopyText } from "@/features/explorer/components/table-data/Index";
import { useSearchAssets } from "@/features/explorer/services/get-assets/Index";
import Header from "@/layouts/header/Index";
import { formatAmount } from "@/utils/format-amount/Index";
import { getFromLocalStorage } from "@/utils/localstorage/Index";
import { useMemo } from "react";
import { FaWallet } from "react-icons/fa6";

const MarketSearch = () => {
  const { data: assetsSearch, isError, isLoading, refetch } = useSearchAssets();

  const market: any = getFromLocalStorage("market", "not found");
  console.log(market);

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
              src={market?.imageUrl}
              alt=""
              className="col-span-12 md:col-span-4 xl:col-span-2 block"
            />
            <div className="col-span-12 md:col-span-8 xl:col-span-5 flex flex-col gap-2">
              <div className="bg-black-6 border border-black-5 rounded-md py-2 px-3 flex items-center gap-5 justify-between">
                <p className="text-body-4 text-black-4">Market Name</p>
                <p className="text-body-4 text-white-1">{market?.name}</p>
              </div>
              <div className="bg-black-6 border border-black-5 rounded-md py-2 px-3 flex items-center gap-5 justify-between">
                <p className="text-body-4 text-black-4">
                  Total Asset Valuation
                </p>
                <p className="text-body-4 text-white-1">$24,737.33</p>
              </div>
              <div className="bg-black-6 border border-black-5 rounded-md py-2 px-3 flex items-center gap-5 justify-between">
                <p className="text-body-4 text-black-4">
                  Total Number of Assets
                </p>
                <p className="text-body-4 text-white-1">23,374</p>
              </div>
              <div className="bg-black-6 border border-black-5 rounded-md py-2 px-3 flex items-center gap-5 justify-between">
                <p className="text-body-4 text-black-4">Creator</p>
                <CopyText value={market?.creatorId} />
              </div>
            </div>
            <div className="col-span-12 md:col-span-12 xl:col-span-5 bg-black-6 border border-black-5 rounded-lg py-6 px-3.5 md:px-7">
              <h4 className="text-title-5 text-green-dark-6">About Market</h4>
              <p className="text-body-4 mt-2.5 text-white-5">
                {market?.description}
              </p>
            </div>
          </div>
          <div className="mt-5 mb-1 xl:mb-5">
            <KeysClipboard
              title="Market ID"
              value={market?.collectionAddress}
              icon={<FaWallet />}
            />
          </div>
        </div>
      </div>
      <div className=" pt-7 pb-7">
        <div className="md:w-8/12 xl:w-4/12">
          <SearchInput
            isData={true}
            isError={isError}
            isLoading={isLoading}
            refetch={refetch}
            data={searchAssets}
            placeholder="Search Asset ID"
          />
        </div>
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <AssetCard title="Epic Bracelet" img={assetImg} amount={249585} />
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <AssetCard title="Epic Bracelet" img={assetImg} amount={249585} />
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <AssetCard title="Epic Bracelet" img={assetImg} amount={249585} />
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <AssetCard title="Epic Bracelet" img={assetImg} amount={249585} />
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <AssetCard title="Epic Bracelet" img={assetImg} amount={249585} />
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <AssetCard title="Epic Bracelet" img={assetImg} amount={249585} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSearch;

export const AssetCard = ({
  img,
  title,
  amount,
}: {
  img: string;
  title: string;
  amount: number;
}) => {
  return (
    <div className="bg-[#101010] border border-black-5 rounded-lg p-2">
      <img src={img} alt="" className="w-full block" />
      <div className="p-2">
        <p className="text-title-6 text-green-dark-6">{title}</p>
        <p className="text-body-4 text-white-4">${formatAmount(amount)}</p>
      </div>
    </div>
  );
};
