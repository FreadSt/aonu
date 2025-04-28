import {AppRegistry, Image, ScrollView, Text, View} from "react-native";
import {Link, Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../constants"
import CustomButton from "../components/CustomButton";
import {StatusBar} from "expo-status-bar";
import {useGlobalContext} from "../context/GlobalProvider";

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext()
  if(!isLoading && isLoggedIn) return <Redirect href="/sign-in"/>
  return(
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="min-h-[85vh] justify-center items-center w-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          />
          <Text className="relative mt-5 font-bold text-center text-3xl text-white">
            Discover endless possibilities with {' '}
            <Text className="text-secondary-200">AONU</Text>
          </Text>
          <Text className="relative text-gray-100 font-pregular text-center text-sm mt-7">
            Where creativity meets innovation: AONU
          </Text>
          <CustomButton
            title={"Continue with email"}
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
        <StatusBar backgroundColor="#161622" style="light"/>
      </ScrollView>
    </SafeAreaView>
  )
}

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => App,
);
