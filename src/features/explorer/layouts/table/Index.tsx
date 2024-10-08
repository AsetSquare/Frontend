import TableData from "../../components/table-data/Index";

interface Props {
  data: {
    asset: string;
    id: string;
    assetAddress: string;
    type: string;
    amount: number;
    description: string;
    imageUrl: string;
    marketId: string;
    ownerId: string;
    status: string;
  }[];
}
const Table = ({ data }: Props) => {
  return (
    <div>
      <div className="border border-white-6 bg-black-6 grid items-center text-body-4 text-white-4 grid-cols-11 px-3 w-full md:px-5 py-4">
        <div className="col-span-3">Asset</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Buyer</div>
        <div className="col-span-2">Asset ID</div>
      </div>
      {data.map((cur) => {
        return (
          <div key={cur.id}>
            <TableData
              key={cur.id}
              asset={cur.asset}
              type={cur.type}
              buyer={cur.ownerId}
              assetID={cur.id}
              amount={cur.amount}
              assetObject={cur}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Table;
