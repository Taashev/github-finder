import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateUniqueId } from '../../../utils/generate-unique-id';

type AppNotificationId = string;
type AppNotificationType = 'error';
type AppNotificationData = string;

export type AppNotification = {
	id: AppNotificationId;
	type: AppNotificationType;
	message: AppNotificationData;
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
		createError: (state, action: PayloadAction<AppNotificationData>) => {
			const id = generateUniqueId('notification');
			const type = 'error' as const;
			const message = action.payload;

			const notification = {
				id,
				type,
				message,
			};

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
