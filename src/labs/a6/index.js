import {Link}
	from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import TodoList from "./todo/todo-list"
import ConditionalOutput
	from "./conditional-output";

function Assignment6() {
	return (
		<div>
			<h1>Assignment 6</h1>
			<TodoList/>
			<ConditionalOutput/>
			<Styles/>
			<Classes/>
		</div>
	);
}
export default Assignment6;