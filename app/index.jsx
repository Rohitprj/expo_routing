import { Button, Linking, Pressable, Text, View } from 'react-native'
import { Link, useRouter } from 'expo-router'

export default function App(){
    const router =  useRouter();
    function Router(){
        //router.push("about")
          router.replace("about")
    }
    return(
        <View>
            <Text>
                Contact Info
            </Text>
            <Link href={"contact"} style={{color:"blue",paddingBottom:40}}>hello</Link>
            {/* <Link href={"about"} style={{color:"red"}}>ABOUT-----</Link> */}
            <Pressable
            onPress={Router}
            >
              <Text> ==About=== </Text>
            </Pressable>
        </View>
    )
}