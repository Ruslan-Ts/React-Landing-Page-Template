import React from "react";

export const Services = (props) => {
	return (
		<div id="services" className="text-center">
			<div className="container">
				<div className="section-title">
					<h2>Aktivität</h2>
					<p>
						Jeder gewünschte Text kann hier stehen. Jeder gewünschte Text kann
						hier stehen.
					</p>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.name}-${i}`} className="col-md-4">
									{" "}
									<i className={d.icon}></i>
									<div className="service-desc">
										<h3>{d.name}</h3>
										<p>{d.text}</p>
									</div>
								</div>
						  ))
						: "loading"}
				</div>
			</div>
		</div>
	);
};
