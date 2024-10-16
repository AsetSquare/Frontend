import { axiosApi } from "@/services/axios/Index";
import {
  UnifiedWalletButton,
  useWallet,
  WalletContextState,
} from "@jup-ag/wallet-adapter";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { saveToLocalStorage } from "@/utils/localstorage/Index";

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
  const { publicKey, connected, signMessage } =
    useWallet() as WalletContextState & {
      signMessage: (message: Uint8Array) => Promise<Uint8Array>;
    };
  const [isClient, setIsClient] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  useEffect(() => {
    setIsClient(true); // Ensure this code only runs on the client
  }, []);
  const base =
    "!text-body-4 !md:text-body-4 !text-white-1 !py-2 md:!py-2.5 !px-3 md:px-6 !rounded !text-center !transition-all !outline-none disabled:cursor-not-allowed duration-700 ";
  const handleLogin = useCallback(async () => {
    if (!publicKey || !signMessage) {
      toast("Wallet Not Connected");
      return;
    }
    try {
      const datas = JSON.stringify({
        walletAddress: publicKey.toBase58(),
      });
      const { data } = await axiosApi.post(`/auth/wallet`, datas, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      saveToLocalStorage;

      setIsRegistered(false);
    } catch (error) {
      console.log(error);
    }
  }, [publicKey, signMessage]);
  //BUTTON IS A BUTTON TYPE
  return (
    <div className="">
      {isClient && (
        <UnifiedWalletButton
          buttonClassName={
            base +
            " !bg-green-light-6 !border !border-transparent !hover:border-green-light-8 !hover:bg-green-light-7 !flex !items-center !gap-2"
          }
          currentUserClassName={
            base +
            " !bg-green-light-6 !border !border-transparent !hover:border-green-light-8 !hover:bg-green-light-7 !flex !items-center !gap-3"
          }
        ></UnifiedWalletButton>
      )}
      {connected && isRegistered === true ? (
        <button className={base} onClick={handleLogin}>
          connect
        </button>
      ) : null}
    </div>
  );
}

export default WalletButton;
