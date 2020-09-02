export const getUserFromId = (users, userId) => {
  return users.find(({ id }) => id === userId);
};
