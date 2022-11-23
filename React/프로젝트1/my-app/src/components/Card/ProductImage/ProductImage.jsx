import React from "react";

export default function ProductImage({ thumbnailImg }) {
	// console.log(thumbnailImg)
	const url = "https://test.api.weniv.co.kr/" + thumbnailImg;
	return <img src={url} />;
}
