import React from "react";
import { StyleSheet, Text, View, Image } from "react";
import BasicCard from "../BasicCard";
import { useUserAuth } from "../../utils/UserAuthContext";

function Profile() {
  const { user } = useUserAuth();
  console.log(user);

  return <BasicCard />;
}

export default Profile;
