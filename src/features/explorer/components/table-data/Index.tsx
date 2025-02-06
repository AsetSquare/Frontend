import { formatAmount } from "@/utils/format-amount/Index";
import { saveToLocalStorage } from "@/utils/localstorage/Index";
import { shortenString } from "@/utils/shorten-string/Index";
import { useEffect, useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface Props {
  asset: string;
  type: string;
  buyer: string;
  amount: number;
  assetID: string;
  assetObject?: {
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
  };
}

const TableData = ({
  asset,
  type,
  amount,
  buyer,
  assetID,
  assetObject,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="grid items-center grid-cols-11 px-3 w-full md:px-5 py-4 border-[0.67px] border-white-6">
      <div className="col-span-3">
        <p
          className="text-white-2 uppercase text-body-4 cursor-pointer underline"
          onClick={() => {
            saveToLocalStorage("asset", assetObject);
            navigate(`/explorer/asset/${assetObject?.id}`);
          }}
        >
          {asset}
        </p>
      </div>
      <div className="col-span-2">
        <span className="text-body-4 capitalize text-green-dark-6 py-1.5 px-2 border border-green-dark-10 rounded">
          {type}
        </span>
      </div>
      <div className="col-span-2">
        <p className="text-white-2 uppercase text-body-4">
          ${formatAmount(amount)}
        </p>
      </div>
      <div className="col-span-2">
        <CopyText value={buyer} />
      </div>
      <div className="col-span-2">
        <CopyText value={assetID} />
      </div>
    </div>
  );
};

export default TableData;

export const CopyText = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (copied) {
      timer = window.setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 text-green-dark-6">
        <p className="text-body-4">{shortenString(value)}</p>
        <RiFileCopyLine
          className="text-[18px] cursor-pointer"
          onClick={handleCopy}
        />
      </div>
      {copied && (
        <span className="text-green-dark-6 text-body-6 mt-1">Copied!</span>
      )}
    </div>
  );
};
