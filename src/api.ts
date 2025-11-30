const conta = {
    email: 'teste@gmail.com',
    password: '123456',
    name: 'Teste',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
