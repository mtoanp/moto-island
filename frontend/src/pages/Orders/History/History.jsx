import "./History.scss";
import "../Orders/Orders.scss";
import history from "../../../assets/history.jpg";

import { ordersData } from "../../../../datas/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function History() {
	const navigate = useNavigate();
	const [orders, setOrders] = useState(ordersData);

	const goToDetails = (id) => {
		navigate(`/api/orders/${id}`);
	};

	const handleNew = () => {
		navigate("/api/orders/new");
	};

	const handleEdit = (order) => {
		navigate(`/api/orders/${order.id}/edit`);
	};

	const handleDelete = (id) => {
		console.log("Delete order", id);

		// Demo with Local Data: ordersData
		ordersData.splice(
			ordersData.findIndex((order) => order.id === id),
			1
		);
		setOrders([...ordersData]);
	};

	return (
		<div className="orders-page full-page flex-center flex-col">
			<div className="background-history absolute z-100 ">
				<img src={history} alt="" />
			</div>
			<div className="history-form-border">
				<div className="title-stage flex flex-row justify-between">
					<h1 className="text-3xl font-bold text-white">Orders list</h1>
					<div className="btn btn-success ml-4" onClick={handleNew}>
						+
					</div>
				</div>

				<div className="orders mt-5">
					{orders &&
						orders.map((order) => (
							<div
								key={order.id}
								className="order flex flex-row justify-between mt-1 paper"
							>
								<p
									className="text-xl font-bold cursor-pointer flex-center"
									onClick={() => goToDetails(order.id)}
								>
									{`${order.id}. ${order.client}`}
								</p>
								<div className="control">
									<div
										className="btn btn-warning ml-2"
										onClick={() => handleEdit(order)}
									>
										Edit
									</div>
									<div
										className="btn btn-danger ml-2"
										onClick={() => handleDelete(order.id)}
									>
										Delete
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
