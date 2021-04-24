import React from 'react'
import { View, Text } from 'react-native'

interface ChangeRateProps {
    value: number,
    style?: object,
}

const ChangeRate = ({ value, style = {} }: ChangeRateProps) => {
    return (
        <Text style={[style, { color: value > 0 ? "blue" : "red" }]}>
          {value > 0 && "+"}
          {value} %
        </Text>
    )
}

export default ChangeRate
