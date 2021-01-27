import { HabitsState } from "./contracts/state";

const initialState: HabitsState = {
	items: [],
};

const habitsReducer = (action: any, state = initialState) => {
	switch (action?.type) {
		default:
			return state;
	}
};

export default habitsReducer;
