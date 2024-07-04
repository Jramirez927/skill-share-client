import React, { FC } from "react"
import { TextStyle, ViewStyle, FlatList } from "react-native"
import { Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing } from "../theme"
import CourseComponent, { courses } from "app/components/ContentManagmentComponents/CourseComponent"

export const ContentManagmentScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function ContentManagmentScreen(_props) {
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <Text preset="heading" text="Content Management" style={$title} />

        <Text preset="subheading" text="My Courses" />
        <Text text="Manage my lessons here!" style={$description} />
        <FlatList
          data={courses}
          renderItem={({ item }) => <CourseComponent {...item} />}
          keyExtractor={(course) => course.id}
        />
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}

const $description: TextStyle = {
  marginBottom: spacing.lg,
}
