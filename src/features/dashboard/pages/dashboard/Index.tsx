import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Header from "@/layouts/header/Index";
import ImageBg from "@/assets/bg/bg-1.svg";
import Card from "../../components/card/Index";
import { formatAmount } from "@/utils/format-amount/Index";
import { RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa6";
import { MdKey } from "react-icons/md";
import {
  useGetProfile,
  useGetApiKey,
} from "@/features/explorer/services/get-api-key";

const Dashboard = () => {
  const { data, error, isLoading } = useGetProfile();
  const {
    data: Apidata,
    error: apierror,
    isLoading: apiLoading,
  } = useGetApiKey();
  const [profileData, setProfileData] = useState({
    publicKey: "",
    walletBalance: 0,
    apiKey: "",
  });

  useEffect(() => {
    if (data?.data?.item && Apidata?.data.item) {
      const { publicKey, walletBalance } = data.data.item;
      const { apiKey } = Apidata.data.item;
      setProfileData({ publicKey, walletBalance, apiKey });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch profile data. Please try again later.");
    }
  }, [error]);

  if (isLoading && apiLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading dashboard. Please refresh the page.</div>;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ImageBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
        className="w-full relative"
      >
        <Header />
        <div className="px-[3%] mt-[2vh] md:mt-[3vh] xl:mt-[10vh] pt-10 pb-7">
          <div className="grid grid-cols-12 gap-5">
            <Card
              title="Wallet Balance"
              curr="SOl"
              amount={formatAmount(profileData.walletBalance)}
            />
            <div className="col-span-12 xl:col-span-8">
              <div className="my-2">
                <KeysClipboard
                  title="API Key"
                  value={profileData.apiKey || "loading..."}
                  icon={<MdKey />}
                />
              </div>
              <div className="my-4">
                <KeysClipboard
                  title="Wallet Address"
                  value={profileData.publicKey || "loading..."}
                  icon={<FaWallet />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const CopyText = ({ value }: { value: string }) => {
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
      toast.success("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy text");
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-green-dark-6">
        <p className="text-sub-6 !text-[14px] capitalize">
          {copied ? "Copied" : "Copy Key"}
        </p>
        <RiFileCopyLine
          className="text-[18px] cursor-pointer"
          onClick={handleCopy}
        />
      </div>
    </div>
  );
};

export const KeysClipboard = ({
  title,
  icon,
  value,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="border border-black-5 bg-black-6 p-4 rounded-lg">
      <div className="flex border border-green-dark-10 bg-green-dim-11 rounded overflow-hidden">
        <div className="flex gap-1.5 items-center flex-shrink-0 md:px-3.5 px-2.5 py-1.5 md:py-3 bg-[#0B2A13] text-green-dark-6">
          <div className="text-[18px]">{icon}</div>
          <p className="text-body-4 capitalize">{title}</p>
        </div>
        <div className="bg-green-dim-11 flex-grow px-3.5 py-3 flex flex-col md:flex-row justify-between">
          <p className="text-green-dark-6 text-sub-6 whitespace-nowrap">
            {value}
          </p>
          <CopyText value={value} />
        </div>
      </div>
    </div>
  );
};
