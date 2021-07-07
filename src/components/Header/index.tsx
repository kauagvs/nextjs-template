import { Container, Content, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>Slice</Logo>

        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
