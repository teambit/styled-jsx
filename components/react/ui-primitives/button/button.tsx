import React, { ButtonHTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './button.module.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Determines whether button has a primary or secondary type of styling.
   */
  variant: 'primary' | 'secondary';
}

export function Button({ children, variant, ...rest }: IButton) {
  return (
    <>
    <style jsx>{`
        .base {
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          padding: 10px;
          color: #fff;
          font-size: 16px;
          font-family: 'Ubuntu', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          outline: none;
          transition: border-radius 0.5s;
          &:active {
            border-color: #313131;
            background-color: #fff;
            color: #000;
          }
          &:hover{
            border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
          }
          &:disabled {
            border-color: #a5a5a5;
            background-color: #a5a5a5;
            &:hover {
              border-color: #a5a5a5;
              background-color: #a5a5a5;
              border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;;
            }
          }
      }

    .primary {
      border: solid 7px #ab3636;
      background-color: #ab3636;
      &:hover {
        border-color: #bb5151;
        background-color: #bb5151;
      }
    }

    .secondary {
      border: solid 7px #2b3186;
      background-color: #2b3186;
      &:hover {
        border-color: #5159cf;
        background-color: #5159cf;
      }
    }
      `}</style>
      <button className={cs(styles.base, styles[variant])} {...rest}>
        {children}
      </button>
    </>
  );
}

Button.defaultProps = {
  variant: 'primary',
};
