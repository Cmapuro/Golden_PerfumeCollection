import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function useDarkMode() {
  return useContext(ThemeContext);
}