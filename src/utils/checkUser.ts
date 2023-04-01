const usersLogs = [
  { email: 'test@test.com', password: '123' },
  { email: 'admin@test.com', password: 'admin' }
]

export const checkUsersLogs = (email: string, password: string): boolean => {
  return usersLogs.findIndex((item) => item.email === email && item.password === password) !== -1
}
