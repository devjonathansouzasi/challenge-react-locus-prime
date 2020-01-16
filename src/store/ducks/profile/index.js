import { produce } from "immer";
import {
	createReducer,
	createActions,
	Types as ReduxSauceTypes
} from "reduxsauce";
/* Types & Action Creators */

const { Types, Creators } = createActions({
	loadProfilesRequest: ["payload"],
	loadProfilesSuccess: ["profiles"],
	storeProfileRequest: ["payload"],
	storeProfileSuccess: ["profile"],
	isLoading: ["value"]
});

export const ProfileTypes = Types;
export const ProfileActions = Creators;

/* Initial State */

export const INITIAL_STATE = {
	saveds: [],
	isLoading: false
};

/* Reducers */

export const handleLoadProfilesSuccess = produce((draft, action) => {
	draft.saveds = action.profiles;
});

export const handleStoreProfileSuccess = produce((draft, action) => {
	draft.saveds.push(action.profile);
});

export const handleIsLoading = produce((draft, action) => {
	draft.isLoading = action.value;
});

const defaultHandler = produce(draft => draft);

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.LOAD_PROFILES_SUCCESS]: handleLoadProfilesSuccess,
	[Types.STORE_PROFILE_SUCCESS]: handleStoreProfileSuccess,
	[Types.IS_LOADING]: handleIsLoading,
	[ReduxSauceTypes.DEFAULT]: defaultHandler
});
