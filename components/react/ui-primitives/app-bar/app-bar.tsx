import React, { ReactNode, useState } from 'react';

export type AppBarProps = {
  /** App-bar items -  each consists of a label and an action to execute when selected. */
  items: { label: string; action: () => any }[],
  /**  An item to be selected as the default when initilizing the app bar */
  defaultItem?: string,
  /** A custom element (e.g, a logo) */
  children?: ReactNode,
  /** nameClass, style, etc. */
  [x:string]: any
};

export const AppBar = ({ items, children, defaultItem, ...rest } : AppBarProps) => {
  const [selectedItem, setSelectedItem] = useState(defaultItem ? defaultItem : items[0].label);

  const handleItemClick = (event, callback) => {
    setSelectedItem(event.target.innerText);
    if (callback) callback();
  };

  return (
    <div>
      <style jsx>{`
          $breakpoint-sm: 600px;

          .appBar {
            display: block;
            border-radius: 0 0 225px 15Array/0Array 0 15px 255px;
            border-bottom: solid 3px #41403e;
            border-left: solid rgba(0, 0, 0, 0);
            margin-left: 10px;
            margin-right: 26px;
            padding-top: 10px;
            padding-bottom: 5px;
            font-family: 'Indie Flower', cursive;
            font-size: 24px;
          }
          .appBar ul {
            padding: 0;
            margin: 0;
          }
          .appBar ul li {
            display: inline;
            text-decoration: unset;
            color: #000;
            margin-right: 35px;
            cursor: pointer;
          }
          .appBar ul li:hover {
            color: #ab3636;
          }
          .appBar ul .selected:after {
            content: ']';
          }
          .appBar ul .selected:before {
            content: '[';
          }
          .appBar .logo {
            float: right;
          }
      `}
      </style>
      <div className={'appBar'} {...rest}>
        <ul>
          {items.map(item => (
            <li
              key={Math.random()}
              className={selectedItem === item.label ? 'selected' : undefined}
              onClick={e => handleItemClick(e, item.action)}
            >
              {item.label}
            </li>
          ))}
          {children && <div className={'logo'}>{children}</div>}
        </ul>
      </div>
    </div>
  );
};