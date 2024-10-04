import { FaWallet } from "react-icons/fa6";

interface Props {
  title: string;
  amount: number | string;
}

const Card = ({ title, amount }: Props) => {
  return (
    <div className="bg-black-6 border border-black-5 rounded-lg py-6 px-7 col-span-12 xl:col-span-4">
      <div className="flex gap-2 items-center">
        <div className="text-green-dark-6">
          <FaWallet className="text-[18px]" />
        </div>
        <p className="text-body-4 text-white-4">{title}</p>
      </div>
      <h3 className="mt-[10%] xl:mt-[21%] text-title-1 text-white-1">
        ${amount}
      </h3>
    </div>
  );
};

export default Card;
