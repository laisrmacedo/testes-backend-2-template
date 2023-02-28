import { UserBusiness } from '../../../../testes-backend-2/src/business/UserBusiness'
import { UserDatabaseMock } from '../../../../testes-backend-2/tests/mocks/UserDatabaseMock'
import { IdGeneratorMock } from '../../../../testes-backend-2/tests/mocks/IdGeneratorMock'
import { TokenManagerMock } from '../../../../testes-backend-2/tests/mocks/TokenManagerMock'
import { HashManagerMock } from '../../../../testes-backend-2/tests/mocks/HashManagerMock'
import { USER_ROLES } from '../../../../testes-backend-2/src/types'


describe('getAll', () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    test('testar retorno de uma lista de usuários', async () => {
        const userDB = await userBusiness.getAll()
        expect(userDB).toContainEqual(
            {
                id: "id-mock",
                name: "Normal Mock",
                email: "normal@email.com",
                password: "hash-bananinha",
                role: USER_ROLES.NORMAL,
                createdAt: expect.any(String)
            }
        )
    })
})