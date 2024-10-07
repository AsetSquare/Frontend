import { useWallet } from "@jup-ag/wallet-adapter";
interface ButtonProps {
  className?: string;
  to?: string;
  typeoF?: "button" | "submit" | "reset";
  disabled?: boolean;
  type: string;
  onClick?: any;
  external?: boolean;
  Signmsg?: () => any;
}

function WalletButton({
  className,
  to,
  type,
  typeoF,
  disabled = false,
  external,
  Signmsg,
  ...props
}: ButtonProps) {
  const { publicKey, connected } = useWallet();
  const base =
    "text-body-4 md:text-body-4 text-white-1 !py-2 md:!py-2.5 !px-3 md:px-6 rounded text-center transition-all !outline-none disabled:cursor-not-allowed duration-700 " +
    className;

  let style;

  if (type === "primary") {
    style =
      base +
      " bg-green-light-6 border border-transparent hover:border-green-light-8 hover:bg-green-light-7 ";
  } else if (type === "secondary") {
    style =
      base +
      " bg-transparent border border-[#FFFFFF29] hover:bg-[#4f4f4f] hover:border-transparent";
  }

  //BUTTON IS A BUTTON TYPE
  return (
    <button
      className={style}
      disabled={disabled}
      {...props}
      type={typeoF}
      onClick={Signmsg}
    >
      {connected && publicKey ? (
        <span>
          Connected: {publicKey.toBase58().slice(0, 4)}...
          {publicKey.toBase58().slice(-4)}
        </span>
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  );
}

export default WalletButton;
