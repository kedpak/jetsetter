import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
    case 'TOGGLE_ITEM': return state.map(item => {
	    if (item.id === action.id) return {...item, packed: !item.packed};
	    return item.packed;
	}
    }
    case 'REMOVE_ITEM': return state.filter(item.id !== action.id);

  return state;
}
