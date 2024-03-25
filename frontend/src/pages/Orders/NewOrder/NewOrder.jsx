import "./NewOrder.scss";
import FormOrder from "../FormOrder/FormOrder";
import mansky from "../../../assets/mansky.jpg";

export default function NewOrder() {
	return (
		<div className="biggest-stage ">
			<img src={mansky} alt="..." className="background-stage" />
			<div className="second-stage">
				<div className="title-stage">New Order</div>
				<FormOrder />
			</div>
		</div>
	);
}
