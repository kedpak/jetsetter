import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
    case 'TOGGLE_ITEM': return state.map(item => {
	    if (item.id === action.id) return {...item, packed: !item.packed};
	    return item.packed;
	});
    case 'REMOVE_ITEM': return state.filter(item => item.id !== action.id);
    case 'MARK_ALL_AS_UNPACKED':
	return state.map(item => item.packed = true);

    case 'ADD_NEW_ITEM': 
	const item = action.item;
	return [...state, item];
    }

  return state;
}
