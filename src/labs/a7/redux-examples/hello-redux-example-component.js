import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
	// const message = useSelector((hello) => {
	// 	console.log("hello: " + hello)
	// 	console.log("hello message: " + hello.message)
	// 	return (
	// 		hello.message
	// 	)
	// }
	// )
	const message = useSelector((state) => {
		// 	console.log("state: " + state)
		// 	console.log("state.hello: " + state.hello)
		// console.log("state.hello.message: " + state.hello.message)
			return (
				state.hello.message
			)
		}
	)
	
	return(
		<h3>{message}</h3>
	)
}

export default HelloReduxExampleComponent
