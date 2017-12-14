import {
  UPDATE_UNPACKED_ITEMS_FILTER,
  UPDATE_PACKED_ITEMS_FILTER
} from '../constants';

export const updateUnpackedItemsFilter = (filter) => ({
	type: UPDATE_UNPACKED_ITEMS_FILTER,
	filter: filter
});

export const updatePackedItemsFilter = (filter) => ({
	type: UPDATE_PACKED_ITEMS_FILTER,
	filter: filter
});
