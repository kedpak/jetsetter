import { UPDATE_NEW_ITEM_VALUE } from '../constants';

export default function(state = '', action) {
    switch(action.type) {
    case 'UPDATE_NEW_ITEM_VALUE': return action.value;


    }
  return state;
}
