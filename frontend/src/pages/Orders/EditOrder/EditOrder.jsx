import "./EditOrder.scss";
import { useParams } from "react-router-dom";
import { ordersData } from "../../../../datas/data";
import FormOrder from "../FormOrder/FormOrder";
import mansky from "../../../assets/mansky.jpg";

export default function EditOrder() {
	const { id } = useParams();
	const order = ordersData.find((order) => order.id === parseInt(id));

	return (
		<div className="biggest-stage">
			<img src={mansky} alt="..." className="background-stage" />
			<div className="second-stage">
				<div className="title-stage">Edit Order</div>
				<FormOrder order={order} />
			</div>
		</div>
	);
}
