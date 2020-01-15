import React, { useState } from "react";

import { Container, Field } from "./styles";

export default function Input({ icon = null, ...props }) {
	const [selected, setSelected] = useState(false);

	return (
		<Container hasIcon={!!icon}>
			{icon && icon(selected)}
			<Field
				{...props}
				icon={icon ? 1 : 0}
				selected={selected}
				onSelect={() => setSelected(true)}
				onBlur={() => setSelected(false)}
			/>
		</Container>
	);
}
