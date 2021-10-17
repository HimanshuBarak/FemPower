import React, { createContext, useState } from "react";

const PhaseContext = createContext();

function PhaseContextProvider(props) {
	const [phase, setphase] = useState(undefined);
	const [day, setday] = useState(0);
	const [flowContext, setflowContext] = useState("");

	return (
		<PhaseContext.Provider
			value={{
				phase,
				setphase,
				day,
				setday,
				flowContext,
				setflowContext,
			}}
		>
			{props.children}
		</PhaseContext.Provider>
	);
}

export default PhaseContext;
export { PhaseContextProvider };