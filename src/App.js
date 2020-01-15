import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { RootRoutes } from "./routes";
import { store, persistor } from "./store";
import { GlobalStyle } from "./styles/global";

function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<RootRoutes />
					<GlobalStyle />
				</PersistGate>
			</Provider>
		</>
	);
}

export default App;
