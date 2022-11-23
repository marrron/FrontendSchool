import { useRef } from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductName from "./ProductName/ProductName";
import ProductPrice from "./ProductPrice/ProductPrice";
import "./card.css";

export default function Card({ productName, price, thumbnailImg }) {
	//https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg
	// console.log(thumbnailImg)
	const likebtn = useRef();

	function handleLikeBtn(e) {
		console.log(e);
		console.log(e.currentTarget.classList);
		e.currentTarget.classList.toggle("on");
	}

	return (
		<li className="product-item">
			<div className="product-img">
				<ProductImage {...{ thumbnailImg }} />
			</div>
			<ProductName {...{ productName }} />
			<button
				ref={likebtn}
				onClick={handleLikeBtn}
				className="like-btn"
			></button>
			<ProductPrice {...{ price }} />
		</li>
	);
}
