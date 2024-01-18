import {Text, View, TouchableOpacity, Image} from "react-native";
import { s } from "./ProfileCard.style";
import { FontAwesome } from '@expo/vector-icons';

export function ProfileCard({ firstName, lastName, language, doSomething }) {
  return (
      <>
          <View style={s.container}>
              <View style={s.header}>
                  <View>
                      <Image style={s.avatar} source={{uri: "https://i.pravatar.cc/300?img=31"}}/>
                  </View>
                  <View style={s.texts}>
                      <Text style={s.name}>
                          {firstName} {lastName}
                      </Text>
                      <Text>Hi I'm {language} developer, Let's get in touch</Text>
                  </View>
              </View>
              <View style={s.social}>
                  <TouchableOpacity style={s.socialBtn}>
                      <FontAwesome name="twitter" size={24} color="#1DA1F2" />
                  </TouchableOpacity>
                  <TouchableOpacity style={s.socialBtn}>
                      <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
                  </TouchableOpacity>
                  <TouchableOpacity style={s.socialBtn}>
                      <FontAwesome name="github" size={24} color="#333" />
                  </TouchableOpacity>

              </View>
          </View>
      </>
  );
}