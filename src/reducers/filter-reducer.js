import { UPDATE_PACKED_ITEMS_FILTER, UPDATE_UNPACKED_ITEMS_FILTER } from '../constants';

export default function(state = { unpackedItemsFilter: '', packedItemsFilter: '' }, action) {

    switch(action.type) {
    case 'UPDATE_PACKED_ITEMS_FILTER':
	return {...state, packedItemsFilter: action.filter};
    case 'UPDATE_UNPACKED_ITEMS_FILTER':
	return {...state, unpackedItemsFilter: action.filter};
    }

  return state;
}
