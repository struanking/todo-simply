import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  @supports (-webkit-appearance: none) {
    -webkit-appearance: none;
    background-color: white;
    width: 1.6rem;
    height: 1.6rem;
    border: 1px solid #aaa;
    border-radius: 3px;

    &:focus {
    }
    &:checked {
      position: relative;
      background-color: green;
    }
    &:checked::after {
      /* Position the checkmark */
      position: absolute;
      top: 0.1rem;
      left: calc(50% - 0.1rem);
      content: '';
      width: 0.9rem;
      height: 0.4rem;
      border: 2px solid white;
      border-right: none;
      border-top: none;
      transform: rotate(-45deg) translateX(-50%);
    }
    & + label {
      margin-left: 1rem;
    }
    &:checked + label {
      color: #767676;
      text-decoration: line-through;
    }
  }
`;

export { Checkbox };
