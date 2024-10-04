import { formatAmount } from "@/utils/format-amount/Index";
import { shortenString } from "@/utils/shorten-string/Index";
import { useEffect, useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";

interface Props {
  asset: string;
  type: string;
  buyer: string;
  amount: number;
  assetID: string;
}

const TableData = ({ asset, type, amount, buyer, assetID }: Props) => {
  return (
    <div className="grid items-center grid-cols-10 px-5 py-4 border-[0.67px] border-white-6">
      <div className="col-span-2">
        <p className="text-white-2 uppercase text-body-4">{asset}</p>
      </div>
      <div className="col-span-2">
        <span className="text-body-4 text-green-dark-6 py-1.5 px-2 border border-green-dark-10 rounded">
          {type}
        </span>
      </div>
      <div className="col-span-2">
        <p className="text-white-2 uppercase text-body-4">
          ${formatAmount(amount)}
        </p>
      </div>
      <div className="col-span-2">
        <CopyText value={buyer} length={12} />
      </div>
      <div className="col-span-2">
        <CopyText value={assetID} length={12} />
      </div>
    </div>
  );
};

export default TableData;

export const CopyText = ({
  value,
  length,
}: {
  value: string;
  length: number;
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (copied) {
      timer = window.setTimeout(() => {
        setCopied(false);
      }, 2000);
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
        <p className="text-body-4">{shortenString(value, length)}</p>
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
