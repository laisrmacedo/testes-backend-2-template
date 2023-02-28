import { UserBusiness } from '../../../../testes-backend-2/src/business/UserBusiness'
import { UserDatabaseMock } from '../../../../testes-backend-2/tests/mocks/UserDatabaseMock'
import { IdGeneratorMock } from '../../../../testes-backend-2/tests/mocks/IdGeneratorMock'
import { TokenManagerMock } from '../../../../testes-backend-2/tests/mocks/TokenManagerMock'
import { HashManagerMock } from '../../../../testes-backend-2/tests/mocks/HashManagerMock'

describe('login', () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test('testar login de um usuario NORMAL', async() => {
        const input = {
            email: 'normal@email.com',
            password: 'bananinha'
        }
        const response = await userBusiness.login(input)
        const token = 'token-mock-normal'
        expect(response.token).toBe(token)
    })
})