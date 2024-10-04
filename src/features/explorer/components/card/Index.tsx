import { ReactNode } from "react";

interface Props {
  title: string;
  stats: number | string;
  icon: ReactNode;
}

const Card = ({ title, stats, icon }: Props) => {
  return (
    <div className="bg-[#101010] border border-black-5 rounded-md py-4 px-5">
      <div className="flex justify-between items-center">
        <p className="text-body-4 text-white-4">{title}</p>
        <div className="text-green-dark-6">{icon}</div>
      </div>
      <h3 className="mt-6 text-title-4 text-white-1">{stats}</h3>
    </div>
  );
};

export default Card;
