import ImageBg from "@/assets/bg/bg-1.svg";
import SearchInput from "@/components/search-Input/Index";
import Header from "@/layouts/header/Index";
import { RiFireFill } from "react-icons/ri";
import Card from "../components/card/Index";
import { formatAmount } from "@/utils/format-amount/Index";
import { PiLockKeyFill } from "react-icons/pi";
import Table from "../layouts/table/Index";

const Explorer = () => {
  const collectionFilters = [
    { label: "Real Estate Property", value: "real_estate_property" },
    { label: "Fine Art", value: "fine_art" },
    { label: "Gold Bullion", value: "gold_bullion" },
    { label: "Luxury Watches", value: "luxury_watches" },
    { label: "Vintage Cars", value: "vintage_cars" },
    { label: "Private Equity Shares", value: "private_equity_shares" },
    { label: "Commercial Real Estate", value: "commercial_real_estate" },
    { label: "Carbon Credits", value: "carbon_credits" },
    { label: "Farmland", value: "farmland" },
    { label: "Diamonds", value: "diamonds" },
    { label: "Wine Collections", value: "wine_collections" },
    { label: "Luxury Yachts", value: "luxury_yachts" },
    { label: "Intellectual Property", value: "intellectual_property" },
    { label: "Music Royalties", value: "music_royalties" },
    { label: "Film Royalties", value: "film_royalties" },
    { label: "Commercial Debt", value: "commercial_debt" },
    { label: "Agricultural Commodities", value: "agricultural_commodities" },
    { label: "Oil Reserves", value: "oil_reserves" },
    { label: "Energy Futures", value: "energy_futures" },
    { label: "Collectible Sneakers", value: "collectible_sneakers" },
  ];

  const handleCollection = (value: string) => {
    console.log(value);
  };

  const tableData = [
    {
      asset: "Gold Bullion",
      type: "Buy",
      buyer: "0xA1b2C3D4E5F6",
      amount: 50000,
      assetID: "0xABC123XYZ456",
    },
    {
      asset: "Commercial Real Estate",
      type: "Sell",
      buyer: "0xB2C3D4E5F6A1",
      amount: 750000,
      assetID: "0xDEF456UVW789",
    },
    {
      asset: "Fine Art",
      type: "Buy",
      buyer: "0xC3D4E5F6A1B2",
      amount: 200000,
      assetID: "0xGHI789JKL012",
    },
    {
      asset: "Carbon Credits",
      type: "Buy",
      buyer: "0xD4E5F6A1B2C3",
      amount: 10000,
      assetID: "0xJKL012MNO345",
    },
    {
      asset: "Farmland",
      type: "Sell",
      buyer: "0xE5F6A1B2C3D4",
      amount: 1200000,
      assetID: "0xMNO345PQR678",
    },
    {
      asset: "Luxury Watches",
      type: "Buy",
      buyer: "0xF6A1B2C3D4E5",
      amount: 150000,
      assetID: "0xPQR678STU901",
    },
    {
      asset: "Diamonds",
      type: "Sell",
      buyer: "0xA1B2C3D4E5F6",
      amount: 300000,
      assetID: "0xSTU901VWX234",
    },
    {
      asset: "Music Royalties",
      type: "Buy",
      buyer: "0xB2C3D4E5F6A1",
      amount: 25000,
      assetID: "0xVWX234YZA567",
    },
    {
      asset: "Oil Reserves",
      type: "Sell",
      buyer: "0xC3D4E5F6A1B2",
      amount: 600000,
      assetID: "0xYZA567BCD890",
    },
    {
      asset: "Wine Collections",
      type: "Buy",
      buyer: "0xD4E5F6A1B2C3",
      amount: 80000,
      assetID: "0xBCD890EFG123",
    },
  ];

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
        <div className="px-[3%] mt-[8vh] md:mt-[17vh] pt-10 pb-7">
          <h3 className="text-title-3 md:text-title-1 text-white-1 mb-4">
            Tokenize, Track and Create Orderbooks for RWAs
          </h3>
          <div className="bg-[#101010] rounded-md p-[1vw] border border-black-5 md:w-1/2">
            <SearchInput placeholder="Asset ID / Market ID" />
          </div>
          <div className="flex mt-4 bg-green-dim-11 border border-green-dark-10 rounded-md">
            <div className="bg-green-light-11 text-sub-6 text-green-dark-6 py-4 flex gap-2 uppercase px-5 w-fit flex-shrink-0">
              Trending Markets <RiFireFill className="text-[18px]" />
            </div>
            <div className="overflow-x-auto scrollbar-hide whitespace-nowrap flex gap-2.5 ">
              {collectionFilters.map((cur, index) => {
                return (
                  <button
                    key={index}
                    className="flex gap-1 py-4 uppercase px-5 text-sub-6"
                    onClick={() => handleCollection(cur.value)}
                  >
                    <span className="text-green-dark-9">#{index + 1}</span>
                    <RiFireFill className="text-[18px] text-green-dark-6" />
                    <span className="text-white-1">{cur.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[3.5%] py-5">
        <div className="grid grid-cols-10 gap-5">
          <div className="col-span-2">
            <Card
              title="Total Value Locked"
              stats={"$" + formatAmount(200000)}
              icon={<PiLockKeyFill className="text-[18px]" />}
            />
          </div>
          <div className="col-span-2">
            <Card
              title="Total Markets"
              stats={formatAmount(13747)}
              icon={<PiLockKeyFill className="text-[18px]" />}
            />
          </div>
          <div className="col-span-2">
            <Card
              title="Total Assets"
              stats={formatAmount(6737483)}
              icon={<PiLockKeyFill className="text-[18px]" />}
            />
          </div>
          <div className="col-span-2">
            <Card
              title="Total Assets (Delivered)"
              stats={formatAmount(5993047)}
              icon={<PiLockKeyFill className="text-[18px]" />}
            />
          </div>
          <div className="col-span-2">
            <Card
              title="Total Assets (en Route)"
              stats={formatAmount(13047)}
              icon={<PiLockKeyFill className="text-[18px]" />}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 bg-[#101010] border border-black-5 rounded-lg py-5 px-6">
        <h4 className="text-white-1 text-title-5">Transactions</h4>
        <div className="my-5">
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default Explorer;
