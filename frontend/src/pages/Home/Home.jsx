import "./Home.scss";
import snowyMountain from "../../assets/snowyMountain.png";
export default function Home() {
	return (
		<div className=" ">
			<img
				src={snowyMountain}
				alt="..."
				className=" bg-cover bg-center bg-gradient-to-tr from-black to-white-700 h-full w-full object-cover absolute  inset-0"
			/>
			<div className="absolute inset-0 flex justify-center items-center flex-col ">
				<div className="relative text-center">
					<div className="font-[Poppins] text-3xl md:text-4xl lg:text-5xl hover:bg-gradient-to-tr hover:from-black hover:to-white-700 hover:mix-blend-overlay inline-block hover:rounded-lg">
						DISCOVER
					</div>
				</div>
				<div className="relative text-center mt-10">
					<div className="font-[Poppins] text-3xl md:text-4xl lg:text-5xl hover:bg-gradient-to-tr hover:from-black hover:to-white-700 hover:mix-blend-overlay inline-block hover:rounded-lg">
						SNOWY MOUNTAINS
					</div>
				</div>
			</div>
		</div>
	);
}
