import produce from "immer";
import {
	createReducer,
	createActions,
	Types as ReduxSauceTypes
} from "reduxsauce";

/* Types & Action Creators */

const { Types, Creators } = createActions({
	loginRequest: ["payload"],
	loginSuccess: ["user"],
	registerRequest: ["payload"],
	registerSuccess: ["user"],
	logout: null,
	isLoading: null,
	hasError: null
});

export const AuthTypes = Types;
export const AuthActions = Creators;

/* Initial State */

export const INITIAL_STATE = {
	user: {
		id: undefined,
		name: undefined,
		email: undefined
	},
	isLoading: false
};

/* Reducers */

const handleLoginSuccess = produce((draft, action) => {
	draft.user.id = action.user.id;
	draft.user.name = action.user.name;
	draft.user.email = action.user.email;
	draft.isLoading = false;
});

const handleRegisterSuccess = produce((draft, action) => {
	draft.user.id = action.user.id;
	draft.user.name = action.user.name;
	draft.user.email = action.user.email;
	draft.isLoading = false;
});

const handleIsLoading = produce(draft => {
	draft.isLoading = true;
});

const handleHasError = produce(draft => {
	draft.isLoading = false;
});

const handleLogout = produce(draft => {
	draft.user.id = undefined;
	draft.user.name = undefined;
	draft.user.email = undefined;
	draft.isLoading = false;
});

const defaultHandler = produce(draft => draft);

/* Reducers to types */

export const HANDLERS = {
	[Types.LOGIN_SUCCESS]: handleLoginSuccess,
	[Types.REGISTER_SUCCESS]: handleRegisterSuccess,
	[Types.HAS_ERROR]: handleHasError,
	[Types.LOGOUT]: handleLogout,
	[Types.IS_LOADING]: handleIsLoading,
	[ReduxSauceTypes.DEFAULT]: defaultHandler
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
