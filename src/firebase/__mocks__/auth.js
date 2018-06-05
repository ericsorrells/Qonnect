export const doPasswordUpdate = jest.fn(() => {
  return Promise.resolve('password')
});

export const doCreateUserWithEmailAndPassword = jest.fn(() => {
  console.log('CALLING MOCK FUNCTION')

  return Promise.resolve()
})