import "./Home.scss";
import HomeBackground from "../../assets/snow.svg";

export default function Home() {
	return (
		<div className="truncate">
			<div className="left-[720px] top-[309px] absolute text-black text-[40px] font-normal font-['Jua'] tracking-[16px] ">
				DISCOVER
			</div>
			<div className="left-[490px] top-[424px] absolute text-black text-[70px] font-normal font-['Jua'] tracking-[28px]">
				SWITZERLAND
			</div>

			<img
				src={HomeBackground}
				alt=""
				className="w-full h-full bg-cover bg-center sm:bg-scroll md:bg-scroll lg:bg-scroll"
			/>
		</div>
	);
}
