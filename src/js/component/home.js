import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState(null);
	return (
		<div>
			<div className="topStick mx-auto" />
			<div className="stopLight mx-auto d-flex flex-column align-items-center justify-content-center">
				<div
					className={
						color === "red" ? "red selected light" : "red light"
					}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow"
							? "yellow selected light"
							: "yellow light"
					}
					onClick={() => setColor("yellow")}
				/>

				<div
					className={
						color === "green"
							? "green selected light"
							: "green light"
					}
					onClick={() => setColor("green")}
				/>
			</div>
		</div>
	);
}
