import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware({
    // thunk: { extraArgument: { services } },
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const rootConfig = {
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
};

// @ts-ignore
const makeStore = ({ isServer }) => {
  if (isServer) {
    return configureStore(rootConfig);
  } else {
    const store = configureStore(rootConfig); // Creating the store again
    // @ts-ignore
    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

// @ts-ignore
export const wrapper = createWrapper<AppStore>(makeStore);
