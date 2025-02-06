import { MdOutlineReportGmailerrorred } from "react-icons/md";
import Button from "../button/Index";

interface Props {
  className?: string;
  errorClassName?: string;
  refetch: any;
  btnClassName?: string;
}

const ErrorState = ({
  className,
  errorClassName,
  refetch,
  btnClassName,
}: Props) => {
  return (
    <div
      className={
        "flex h-[50vh] w-full flex-col items-center justify-center " + className
      }
    >
      <MdOutlineReportGmailerrorred
        className={"text-[32px] text-error " + errorClassName}
      />
      <p className="mt-2 text-center text-body-5 text-[#30D158]">
        Oops! Something went wrong. Please try again later
      </p>
      <Button
        type="primary"
        className={
          "mt-4 !py-0 !bg-transparent !text-green-dark-8 !underline hover:!text-green-dim-4 " +
          btnClassName
        }
        onClick={() => refetch({ throwOnError: true })}
      >
        Try Again!
      </Button>
    </div>
  );
};

export default ErrorState;
