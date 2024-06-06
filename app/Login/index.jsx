import { Button, Linking, Pressable, Text, View } from 'react-native'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'

export default function App(){
    const login = useLocalSearchParams();
    console.log(login.key)
    return(
        <View>
            <Text>login page {login.key}</Text>
        </View>
    )
}