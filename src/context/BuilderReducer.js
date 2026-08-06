import { BuilderActions } from "./BuilderActions";

export function builderReducer(state, action) {

    switch(action.type){

        case BuilderActions.ADD_FIELD:

            return state;

        case BuilderActions.DELETE_FIELD:

            return state;

        case BuilderActions.UPDATE_FIELD:

            return state;

        case BuilderActions.ADD_CHILD:

            return state;

        default:

            return state;

    }

}