import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerTitle: "Open-O-Connect" }} />
      <Stack.Screen
        name="o19-login/index"
        options={{ headerTitle: "Authorize" }}
      />
      <Stack.Screen
        name="appointment-detail/index"
        options={{ headerTitle: "Appointment Detail" }}
      />
    </Stack>
  );
}
