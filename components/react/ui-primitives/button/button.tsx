import React, { ButtonHTMLAttributes } from 'react';
import cs from 'classnames';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Determines whether button has a primary or secondary type of styling.
   */
  variant: 'primary' | 'secondary';
}

export function Button({ children, variant, ...rest }: IButton) {
  return (
    <div>

      <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
        `}
      </style>
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
        }
        .base:active {
          border-color: #313131;
          background-color: #fff;
          color: #000;
        }
        .base:hover {
          border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
        }
        .base:disabled {
          border-color: #a5a5a5;
          background-color: #a5a5a5;
        }
        .base:disabled:hover {
          border-color: #a5a5a5;
          background-color: #a5a5a5;
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        }
        .primary {
          border: solid 7px #ab3636;
          background-color: #ab3636;
        }
        .primary:hover {
          border-color: #bb5151;
          background-color: #bb5151;
        }
        .secondary {
          border: solid 7px #2b3186;
          background-color: #2b3186;
        }
        .secondary:hover {
          border-color: #5159cf;
          background-color: #5159cf;
        }
 
      `}</style>
      <button className={cs('base', variant)} {...rest}>
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  variant: 'primary',
};
