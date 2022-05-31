import styled from 'styled-components';

function Item({ src, active, prev, next }) {
  return <ItemStyle src={src} active={active} prev={prev} next={next} alt="" />;
}

export default Item;

const ItemStyle = styled.img`
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 370px;
  margin: auto;
  z-index: 100;
  object-fit: cover;
  transition: transform 0.8s, opacity 0.8s, z-index 0.5s;
  transform: ${(props) => (props.prev ? 'translateX(-100%)' : '')};
  transform: ${(props) => (props.next ? 'translateX(100%)' : '')};
  z-index: ${(props) => (props.prev || props.next ? 800 : '')};
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    position: relative;
    z-index: 900;
  `}
`;
