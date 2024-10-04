//"2ngcNur94HueyioioIJI29hieEuFEC"

import TableData from "../../components/table-data/Index";

interface Props {
  data: {
    asset: string;
    type: string;
    buyer: string;
    amount: number;
    assetID: string;
  }[];
}
const Table = ({ data }: Props) => {
  return (
    <div>
      <div className="border border-white-6 bg-black-6 grid items-center text-body-4 text-white-4 grid-cols-10 px-5 py-4">
        <div className="col-span-2">Asset</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Buyer</div>
        <div className="col-span-2">Asset ID</div>
      </div>
      {data.map((cur) => {
        return (
          <TableData
            key={cur.assetID}
            asset={cur.asset}
            type={cur.type}
            buyer={cur.buyer}
            assetID={cur.assetID}
            amount={cur.amount}
          />
        );
      })}
    </div>
  );
};

export default Table;
