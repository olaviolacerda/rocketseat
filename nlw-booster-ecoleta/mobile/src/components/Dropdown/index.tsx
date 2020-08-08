import { Feather as Icon } from '@expo/vector-icons';
import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { DropdownProps } from '../../types/components/dropdown';

const Dropdown = ({ items, handleValueChange, placeholder, itemsKey }: DropdownProps): ReactElement => {
  return (
    <RNPickerSelect
      style={pickerSelectStyles}
      onValueChange={(value) => handleValueChange(value)}
      itemKey={placeholder}
      placeholder={{
        label: placeholder,
        value: null,
      }}
      items={items}
      Icon={() => {
        return <Icon 
        name="chevron-down" 
        size={30} 
        color="#a0a0b2"
        />;
      }}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 8,
    color: "#a0a0b2",
    paddingHorizontal: 24,
    fontSize: 16,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    height: 60,
    color: "#a0a0b2",
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 15,
    right: 12,
  },
});

export default Dropdown;