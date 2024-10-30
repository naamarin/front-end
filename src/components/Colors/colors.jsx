import React, { useState } from 'react';
import styles from './colors.module.css';
import { updateTabColor } from '../../services/fetchDataBase';

const Colors = ({ id, onColorChange }) => { // Added onColorChange prop
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    { name: 'green', value: '#8fea8f' },
    { name: 'pink', value: '#FFC0CB' },
    { name: 'yellow', value: '#eaea73' },
    { name: 'lightBlue', value: '#ADD8E6' },
    { name: 'purple', value: '#f382f3' },
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelect = async (color) => {
    await updateTabColor(id, color); // Send selected color to updateTabColor
    onColorChange(); // Call the passed function to trigger a state update in Tab
    setIsOpen(false); // Close color options after selection
  };

  return (
    <div className={styles.container}>
      <button className={styles.roundButton} onClick={toggleOpen}>
        {isOpen ? '✖' : '+'}
      </button>
      {isOpen && (
        <div className={styles.colorOptions}>
          {colors.map((color) => (
            <div
              key={color.name}
              className={styles.colorCircle}
              style={{ backgroundColor: color.value }}
              onClick={() => handleColorSelect(color.value)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Colors;
