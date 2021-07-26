import styled from "styled-components";

export const AccordionSection = styled.section`
  min-height: 500px;
  width: min(90%, 600px);
  margin: 0 auto;
`;

export const Container = styled.div`
  box-shadow: 2px 10px 35px 1px hsla(0, 0%, 60%, 0.3);
`;

export const Wrap = styled.div`
  background-color: hsl(0, 0%, 15%);
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  background: hsl(0, 0%, 10%);
  color: hsl(163, 100%, 50%);
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid hsl(163, 100%, 50%);
  border-top: 1px solid hsl(163, 100%, 50%);
`;
