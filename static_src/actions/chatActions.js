export const ADD_CHAT = '@@chat/SEND_MESSAGE';

export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});
