import { View, Text, Alert } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function App() {
    const PnNo = useLocalSearchParams();
    console.log(PnNo.phNo)
  return (
    <View>
      <Text>Pn.No {PnNo.phNo}</Text>
    </View>
  )
}