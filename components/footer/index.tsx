// import { XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // toogleShowBanner(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="p-6">
        <p className="text-center">
          Follow me{" "}
          <a
            href="https://www.facebook.com/kevinbkdev/"
            className="text-blue-600"
            target="_blank"
          >
            @kevinbkdev
          </a>

        <br></br>
        <br></br>

        Donate to me{" "}
        <br></br>
        Bank QR
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div style={{ width: "100px", height: "100px" }}>
    <img src="/bank.jpg" alt="Bank QR Code" style={{ width: "auto", height: "auto" }} />
  </div>
</div>
<br></br>
Buy me a coffee
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="https://www.buymeacoffee.com/hkne" target="_blank">
            <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" />
          </a>
        </div>

        </p>
      </div>

      <div className="p-6">
        <p className="text-center"> 
        @source-blog by {" "}
          <a
            href="https://twitter.com/thanhledev"
            className="text-blue-600"
            target="_blank"
          >
            @thanhledev
          </a>
        </p>
      </div>
      
      <div
        className={[
          "fixed inset-x-0 pb-2 sm:pb-5 transition-all",
          showBanner ? "bottom-0 opacity-100" : "bottom-[-30px] opacity-0",
        ].join(" ")}
      >
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="p-1 bg-white border border-green-500 rounded-lg shadow-lg dark:bg-gray-700 border-1 sm:p-2">
            <div className="flex flex-col flex-wrap items-center justify-between md:flex-row">
              <div className="flex items-center flex-1 m-3">
                <span className="hidden p-1 text-2xl rounded-lg md:flex">
                  🤓
                </span>
                <p className="font-medium text-green-600 md:ml-3">
                  <span>
                    Thứ 7 (24-12) lúc 9 giờ sáng mình có buổi workshop nhỏ chia
                    sẻ cách viết Smart Contract dùng Solidity, target là chỉ cần
                    biết code là làm được. <br /> Nếu bạn hứng thú hãy tham gia
                    nhé!
                  </span>
                </p>
              </div>
              <div className="flex-shrink-0 order-2 my-1 mr-2 sm:order-3 sm:ml-2 md:mt-0">
                <a
                  type="button"
                  href="https://discord.gg/Ay9PtBVe?event=1054623077788565575"
                  target="_blank"
                  className="flex p-2 -mr-1 text-white bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Tham gia
                </a>
                {/* <button
                    type="button"
                    className="flex p-2 -mr-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => toogleShowBanner(false)}
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
