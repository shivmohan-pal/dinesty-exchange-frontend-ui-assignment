import Image from "next/image";
import companyLogo from "../../public/ahead-logo.png";
import { Email, LocationOnRounded } from "@mui/icons-material";
import AppleAppStoreButton from "./svg/AppleAppStoreButton";
import Rating from "./Rating";

const InfoStrip = ({ icon, info }) => {
    return (
        <div className="flex gap-3 items-center">
            <div className="flex p-[8px] text-2xl rounded-full bg-[var(--cyan-200)]">
                {icon}
            </div>
            <p className="text-sm font-medium">{info}</p>
        </div>
    );
}

const Footer = () => {
    return (
        <footer className="px-5 py-8 bg-white">
            <div className="flex flex-col items-center gap-7">
                <div className="flex flex-col items-center">
                    <Image
                        src={companyLogo}
                        height={'1rem'}
                        width={'1rem'}
                        alt='logo'
                    />
                    <span className="block font-medium text-2xl text-[var(--purple-400)]">ahead</span>
                </div>
                <div className="flex gap-8 justify-center flex-col sm:flex-row">
                    <InfoStrip icon={<LocationOnRounded fontSize="inherit" />} info="AuguststroBe 26, 10117 Berlin" />
                    <InfoStrip icon={<Email fontSize="inherit" />} info="hi@ahead-app.com" />
                </div>
                <div>
                    <AppleAppStoreButton />
                </div>
                <p className="text-center text-slate-500 text-sm font-normal">&copy; {new Date().getFullYear()} Ahead app. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;