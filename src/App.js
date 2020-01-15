import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import { RootRoutes } from "./routes";
import { store, persistor } from "./store";
import { GlobalStyle } from "./styles/global";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<ToastContainer autoClose={3000} position="top-right" pauseOnHover />
					<RootRoutes />
					<GlobalStyle />
				</PersistGate>
			</Provider>
		</>
	);
}

export default App;
