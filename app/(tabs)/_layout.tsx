import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, Image, View } from "react-native";

import Colors from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#57aaf7" },
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: "FetchIt",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerStyle: { backgroundColor: "#57aaf7" },
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <Image
                  source={require("../../assets/images/logo.jpg")}
                  style={{ height: 30, width: 30, marginRight: 22 }}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable>
                <View
                  style={{
                    height: 80,
                    width: 80,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="settings-helper"
                    size={40}
                    color={"black"}
                    style={{ paddingBottom: 60 }}
                  />
                </View>
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
