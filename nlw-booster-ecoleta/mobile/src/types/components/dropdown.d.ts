import { Item, PickerStyle } from 'react-native-picker-select';

interface DropdownProps {
  items: Item[];
  style?: PickerStyle;
  placeholder: string;
  itemsKey: string;
  handleValueChange: (value: DropdownItem['value']) => void;
}