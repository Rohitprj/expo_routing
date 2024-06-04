import { Alert, Pressable, Text, View } from 'react-native'
import { useRouter } from 'expo-router'

export default function App() {
    const backBtn = useRouter();
    function Back() {
        const canGoBack = backBtn.canGoBack()
        if (canGoBack) {
            backBtn.back()
        }
        else {
            Alert("Cannot go back")
        }
    }
    return (
        <View>
            <Text>
                Here is my contact
            </Text>
            <Pressable
                onPress={Back}
                
            >
                <Text style={{
                    color:"blue"
                }}
                > Back Button </Text>
            </Pressable>
        </View>
    )
}