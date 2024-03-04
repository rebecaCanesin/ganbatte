import styled from 'styled-components';

export const ImgListContainer = styled.div`
  display:flex; 
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  flex-direction: row;
  margin-left: 100px;
  margin-right: 50px;
`;

export const ImgList = styled.div`
  box-sizing: border-box;
  flex: 1 0 20%;
`;

export const Img = styled.img`
  flex: 1;
  flex-shrink: 0;
  margin: 25px;
`;

export const ViewMoreButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 20px;

    > span {
      color: #DE0A0A;
    }
`;