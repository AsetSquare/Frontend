import { PiEmpty } from "react-icons/pi";

interface Props {
  text: string;
  showBtn?: boolean;
  className?: string;
  iconclassName?: string;
}

const EmptyState = ({ text, className, iconclassName }: Props) => {
  return (
    <div
      className={
        "w-full h-[50vh] flex items-center text-green-dark-6 justify-center flex-col " +
        className
      }
    >
      <PiEmpty className={iconclassName} />

      <p className="text-body-4 text-center text-green-dark-6 mt-3">{text}</p>
    </div>
  );
};

export default EmptyState;
