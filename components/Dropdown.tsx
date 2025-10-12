import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import React, { useState } from "react";

interface DropdownProps {
  options?: string[];
  defaultValue?: string;
  onSelect?: (option: string) => void;
}

export const Dropdown = ({
  options = ['High Frequency', 'Guided Meditation'],
  defaultValue = 'High Frequency',
  onSelect
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  console.log("open: " + isOpen)
  console.log("Current selectedOption:", selectedOption)

  const handleOptionSelect = (option: string) => {
    console.log("Option selected:", option)
    setSelectedOption(option);
    onSelect?.(option);
    setIsOpen(false);
  }

  return (
    <View className=" flex-1 items-center w-full min-h-0">
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className="t-1">
        <Text className="text-white text-3xl font-bold">{selectedOption}</Text>
        <Ionicons name="chevron-down-outline" color="white" size={50} onPress={() => setIsOpen(!isOpen)} />
      </View>
      {isOpen && (
        <View className="w-max h-max bg-blue-500 rounded-md p-2">
          {options.map((option, index) => (
            <Text
              key={index}
              className="text-white text-3xl font-bold"
              onPress={() => {
                console.log(`Option ${index + 1} clicked:`, option);
                handleOptionSelect(option);
              }}
            >
              {option}
            </Text>
          ))}
        </View>
      )}
    </View>
  )
}
