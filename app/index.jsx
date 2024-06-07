import { Button, Linking, Pressable, Text, View } from 'react-native'
import { Link, useRouter } from 'expo-router'

export default function App() {
    const router = useRouter();
    const router1 = useRouter();

    function Router() {
        router.push("about")
        //   router.replace("about")
    }

    function Router1() {
        router1.replace("Info")
    }

    return (
        <View>
            {/* Routing type 1 */}
            <Link href={"contact"} style={{ color: "blue", paddingBottom: 40 }}>Contact Info</Link>

            {/* Routing type 2 */}
            <Pressable
                onPress={Router}
            >
                <Text> ==About=== </Text>
            </Pressable>

            {/* Routing type 3 */}
            <Link href={{
                pathname: "Login",
                params: {
                    key: "hello"
                }
            }}>
                login
            </Link>

            {/*Practice---------------------------------------------------------*/}
            <Pressable
                onPress={Router1}
            >
                <Text>Information</Text>
            </Pressable>

            <Pressable>
            <Link href={{ pathname: "HelpLine", params: { phNo: "98291" } }}>HelpLine Contact Here</Link>
            </Pressable>
        </View>
    )
}