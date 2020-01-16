import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = composeWithDevTools({ trace: true });

const persistConfig = {
	key: "REACT_GIT_PROFILES",
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	composer(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
