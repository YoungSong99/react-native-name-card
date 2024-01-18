import {ProfileCard} from "./components/Profile/ProfileCard"
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";


export default function App() {
  return(
      <SafeAreaProvider>
          <SafeAreaView style={{ flex:1, justifyContent: "center", padding: 20 }}>
              <ProfileCard
                  firstName={"Young"}
                  lastName={"Song"}
                  language={"React Native"}
              />
          </SafeAreaView>
      </SafeAreaProvider>
    );
};

