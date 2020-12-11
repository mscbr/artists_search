import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledSearch = styled.div<{
  active?: boolean;
  error?: boolean;
  value?: string;
}>`
  width: 100%;
  height: 32px;
  font-family: ${theme.typography.fontFamily.hind};
  .inputWrapper {
    position: relative;
    width: 100%;
  }
  label {
    position: absolute;
    bottom: 1em;
    left: 8px;
    font-size: ${theme.typography.fontSize[16]};
    font-weight: ${theme.typography.fontWeight.light};
    letter-spacing: ${theme.typography.letterSpacing[1]};
    color: ${theme.palette.label};
    transition: font-size 0.2s;
    @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
      font-size: ${({ active, value }) =>
        !active && !value
          ? `${theme.typography.fontSize[18]}`
          : `${theme.typography.fontSize[14]}`};
    }
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    cursor: pointer;
  }
  input {
    padding-left: 8px;
    height: 33px;
    width: 100%;
    font-size: ${theme.typography.fontSize[16]};
    color: ${theme.palette.data};
    caret-color: ${theme.palette.label};
    border: none;
    outline: none;
    border: 1px solid;
    border-color: ${({ error, active }) => {
      if (error) {
        return `${theme.palette.pink}`;
      }
      if (active) {
        return `${theme.palette.underlineActive}`;
      }
      return `${theme.palette.underline}`;
    }};
    border-radius: 5px;
    transition: 0.3s;
    @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
      font-size: ${theme.typography.fontSize[18]};
    }
    margin-bottom: 8px;
  }

  input[type='date'] {
    color: ${({ value }) => (value ? 'initial' : 'transparent')};
  }
  input[type='date']:focus {
    color: initial;
  }
  input[type='time'] {
    color: ${({ value }) => (value ? 'initial' : 'transparent')};
  }
  input[type='time']:focus {
    color: initial;
  }

  .inputIcon {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 0;
    top: 0;
    &:hover {
      cursor: pointer;
    }
  }
  .helperText {
    color: ${theme.palette.pink};
    font-size: ${theme.typography.fontSize[16]};
    font-weight: ${theme.typography.fontWeight.light};
    @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
      font-size: ${theme.typography.fontSize[18]};
    }
  }
`;

interface Props {
  id?: string;
  label: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  icon?: JSX.Element | boolean;
  className?: string;
}

const Search = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  icon,
  className
}: Props) => {
  const [active, setActive] = useState(false);
  return (
    <StyledSearch
      active={active}
      error={error}
      value={value}
      className={className}
    >
      <div className="inputWrapper">
        <label htmlFor={id}>{!value && label}</label>
        <input
          id={id}
          value={value}
          onChange={onChange}
          type="text"
          onFocus={() => setActive(true)}
          onBlur={(e) => {
            setActive(false);
            onBlur && onBlur(e);
          }}
        />
        {icon && <div className="inputIcon">{icon}</div>}
      </div>
      <span className="helperText">{helperText}</span>
    </StyledSearch>
  );
};
export default Search;
