import React, { useState, useRef, useEffect } from 'react';
import css from './styles.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const ButtonGroup = ({
  className,
  items,
  activeIndex: propsActiveIndex = 0,
  onItemClick,
  style,
  darkMode = false,
  id,
}) => {
  const [activeIndex, setActiveIndex] = useState(propsActiveIndex);

  const firstActiveButtonRef = useRef();

  useEffect(() => {
    firstActiveButtonRef.current && firstActiveButtonRef.current.click();
  }, []); //eslint-disable-line

  const handleButtonClick = (index, event) => {
    onItemClick(index, items[index]);
    setActiveIndex(index);
  };

  return (
    <div
      className={classNames(css.Container_ButtonGroupTis, {
        [css.Column_ButtonGroupTis]: false
      }, className)}
      style={style}
      id={id}
    >
      {items.map((label, index) => (
        <button
          key={index + '0'}
          ref={index === activeIndex ? firstActiveButtonRef : null}
          className={classNames(css.Button_ButtonGroupTis, {
            [css.ActiveButton_ButtonGroupTis]: index === activeIndex,
            [css.FirstButton_ButtonGroupTis]: index === 0,
            [css.LastButton_ButtonGroupTis]: index === items.length - 1,
            [css.MiddleButton_ButtonGroupTis]: index > 0 && index < items.length - 1,
            [css.Dark_ButtonGroupTis]: darkMode
          })}
          onClick={event => handleButtonClick(index, event)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
  activeIndex: PropTypes.number,
  onItemClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  darkMode: PropTypes.bool,
  id: PropTypes.string,
};