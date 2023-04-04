import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.section_two};
  height: 130px;
  /* padding: 50px; */
`;

export const Line = styled.div`
  height: 1px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
  background: ${({ theme }) => theme.colors.text_secondary};
  opacity: 0.1;
`;

export const Row = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.span``;
export const Tel = styled.span`
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    opacity: 0.5;
  }
`;
export const Email = styled.span`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
