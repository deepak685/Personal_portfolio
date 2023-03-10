import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 90%;
  object-fit: contain;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.p`
  color: gray;
  font-size: 0.6rem;
  margin: 0;
  padding-top: 10px;
`;

export const Title = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  color: black;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
