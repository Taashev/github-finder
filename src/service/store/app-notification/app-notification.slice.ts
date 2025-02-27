import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateUniqueId } from '../../../utils/generate-unique-id';

type AppNotificationType = 'error';
type AppNotificationError = { message: string; description?: string };

type AppNotification = {
	id: string;
	type: AppNotificationType;
	data: AppNotificationError;
};

type InitialState = {
	stack: AppNotification[];
};

const initialState: InitialState = {
	stack: [],
};

const appNotificationSlice = createSlice({
	name: 'appNotification',
	initialState,
	reducers: {
		createError: (state, action: PayloadAction<AppNotificationError>) => {
			const id = generateUniqueId('notification');
			const type = 'error' as const;
			const data = action.payload;
			const notification = { id, type, data };

			state.stack.push(notification);
		},
		remove: (state, action: PayloadAction<string>) => {
			state.stack = state.stack.filter(
				(notification) => notification.id !== action.payload,
			);
		},
	},
});

export const {
	actions: appNotificationActions,
	reducer: appNotificationReducer,
} = appNotificationSlice;
