const Comp = function () {
	return <h4>component in react</h4>;
};

export default Comp;

const Comp2 = (props) => {
	return <h4>component with props: {props.text}</h4>;
};
export { Comp2 };

function Comp3({ children }) {
	return <>{children}</>;
}
export { Comp3 };

const text = true;
function Comp4() {
	if (text) return <h4>conditional true component</h4>;
	return <h4>conditional false component</h4>;
}
export { Comp4 };
