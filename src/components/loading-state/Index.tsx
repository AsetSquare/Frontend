import PuffLoader from "react-spinners/PuffLoader";

interface Props {
  className?: string;
  size: number;
}

const LoadingState = ({ className, size }: Props) => {
  return (
    <div
      className={
        "flex justify-center items-center w-full h-[50vh] " + className
      }
    >
      <PuffLoader color="#30D158" loading size={size} speedMultiplier={0.7} />
    </div>
  );
};

export default LoadingState;
