import { login } from "./login";

describe("login", () => {
  const mockEmail = "teste@gmail.com";
  const mockPass = "123456";
  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login("email@invalido.com", mockPass);
    expect(response).toBeFalsy();
  });

  it("Deve exibir um erro caso a senha seja inválida", async () => {
    const response = await login(mockEmail, "invalido");
    expect(response).toBeFalsy();
  });
});
