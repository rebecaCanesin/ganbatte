import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  color: #0B167D;
  background-color: #FFE486;
  padding: 20px;

    > h3 {
      color: #0B167D;
    }
`;

export const ListContainer = styled.div`
  display: flex;
  margin: 0;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 100px;
`;

export const CategorieItem = styled.div`
  flex: 1 0 25%; 
  box-sizing: border-box;
  cursor: pointer;
`;