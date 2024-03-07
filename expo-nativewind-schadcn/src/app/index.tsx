import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex flex-1 dark:bg-slate-900">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="container px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Text
              role="heading"
              className="dark:text-white text-center native:text-3xl font-bold native:leading-10"
            >
              Welcome to Expo NativeWind Bootstrap
            </Text>
            <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
              You can use this app as a starting point to create recat native (expo) apps.
            </Text>

            <View className="gap-4">
              <Pressable
                onPress={() => toggleColorScheme()}
                className="flex h-9 items-center justify-center overflow-hidden rounded-md bg-primary px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-primary"
              >
                <Text className="text-gray-50">Toggle theme</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }} className="shadow bg-gray-900">
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between">
        <Link className="font-bold flex-1 items-center justify-center text-white" href="#">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4 text-white"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4 text-white"
            href="#"
          >
            Product
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4 text-white"
            href="#"
          >
            Pricing
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 ">
        <Text className={"text-center text-gray-700"}>
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}
