import { Context, MakeStore, createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore, Store } from 'redux';
import { RootState, reducer } from './reducers';

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
    debug: true,
});
