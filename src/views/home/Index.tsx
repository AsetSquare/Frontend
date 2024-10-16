import Header from "@/layouts/header/Index";
import ImageBg from "@/assets/bg/bg-3.svg";
import Icon1 from "@/assets/images/icon-2.svg";
import Icon2 from "@/assets/images/icon-1.svg";
import Icon3 from "@/assets/images/icon-3.svg";
import aboutIcons from "@/assets/images/about-icons.svg";
import boxBg from "@/assets/bg/boxes-bg.svg";
import Button from "@/components/button/Index";
import { RiArticleFill, RiSkipRightFill } from "react-icons/ri";
import laptop from "@/assets/images/laptop.svg";
import Footer from "@/layouts/footer/Index";

const HomePage = () => {
  return (
    <>
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

          <div className="px-[3%] md:px-[3%] xl:px-[3.5%] mt-[5vh] md:mt-[7vh] xl:mt-[12vh] pt-10 pb-7">
            <h3 className="text-title-3 md:text-title-2 xl:text-title-1 text-white-1 mb-2 text-center">
              The Future of Real World Commerce
            </h3>
            <p className="text-white-5 text-body-3 md:text-body-1 text-center ">
              Tokenize, Track and Create Orderbooks for RWAs
            </p>
            <div className="mx-auto flex justify-center mt-8">
              <div className="flex items-center gap-4">
                <Button
                  to="https://docs.assetsquare.xyz/"
                  external={true}
                  type="primary"
                  className="border border-[#10461D] !bg-[#07190B] hover:!bg-green-dim-9 rounded !py-3.5 !px-3 md:!px-5 !text-sub-6 md:!text-sub-5!text-green-dark-6 flex items-center gap-2"
                >
                  <RiArticleFill className="text-[20px]" /> See our Docs
                </Button>
                <Button
                  type="primary"
                  to="/explorer"
                  className="rounded !py-3.5 !px-3 md:!px-5 !text-sub-6 md:!text-sub-5 hover:!bg-green-dark-7 !text-green-light-11 flex items-center gap-2"
                >
                  Exploreeeeee <RiSkipRightFill className="text-[20px]" />
                </Button>
              </div>
            </div>
          </div>
          <div className="pb-[18vh] md:pb-[35vh]"></div>
        </div>

        <div className="flex justify-center -mt-[12vh] md:-mt-[28vh] z-10 relative mb-10">
          <img src={laptop} alt="" className="w-full md:w-[80%] xl:w-fit" />
        </div>

        <div className="my-[20vw] md:my-[10vw]">
          <h6 className="text-black-4 text-body-4 xl:text-body-3 text-center">
            WHY US?
          </h6>
          <h4 className="text-white-1 text-title-4 md:text-title-3 xl:text-title-2 text-center mt-1">
            Why Choose Asset Square?
          </h4>
          <div className="mt-10 px-[5%] md:px-0 flex gap-8 justify-center flex-wrap">
            <Card icon={Icon1} text="Open Endpoints to Create & List Assets" />
            <Card icon={Icon2} text="Create Orderbooks & Trade Assets" />
            <Card icon={Icon3} text="Track In-transit Commerce" />
          </div>
        </div>

        <div className="my-[20vw] md:my-[10vw]">
          <h6 className="text-black-4 text-body-4 xl:text-body-3 text-center">
            ABOUT US
          </h6>
          <h4 className="text-white-1 text-title-4 md:text-title-3 xl:text-title-2 text-center mt-1">
            Get to know Us better!
          </h4>
          <p className="text-body-4 text-white-5 mt-1 mx-3 md:mx-[5vw] xl:mx-[20vw] text-center">
            Asset Square is a Real world Asset market place Aggregator and
            Developer tooling.<br></br> At it’s core its a RWA marketplace for
            buying and selling of intransit RWA and also trading of the Real
            World Assets in real time. With an open explorer for tracking Those
            Assets
          </p>
          <div className="flex justify-center items-center my-5">
            <img
              src={aboutIcons}
              alt=""
              className="ml-[10vw] md:w-[80%] xl:w-fit"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

const Card = ({ text, icon }: { icon: string; text: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${boxBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
      className="flex gap-6 xl:gap-7 items-end justify-between px-5 py-4 xl:px-8 xl:py-7 rounded-lg border border-green-dark-11 md:w-[45vw] xl:w-[36vw]"
    >
      <p className="text-green-dark-6 text-body-3 ">{text}</p>
      <img src={icon} alt="" className="h-[70%] md:h-[75%] xl:h-full" />
    </div>
  );
};
