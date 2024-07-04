import React, { useState } from "react"
import { Image, View, StyleSheet, TouchableOpacity, FlatList, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"

interface Lesson {
  id: string
  thumbnail: string
}
interface Course {
  id: string
  title: string
  lessons: Lesson[]
}
export const courses: Course[] = [
  {
    id: "1",
    title: "Saxaphone for Beginners",
    lessons: [
      { id: "1", thumbnail: "https://via.placeholder.com/150" },
      { id: "2", thumbnail: "https://via.placeholder.com/150" },
    ],
  },
  {
    id: "2",
    title: "Course 2",
    lessons: [
      { id: "1", thumbnail: "https://via.placeholder.com/150" },
      { id: "2", thumbnail: "https://via.placeholder.com/150" },
    ],
  },
  {
    id: "3",
    title: "Course 3",
    lessons: [
      { id: "1", thumbnail: "https://via.placeholder.com/150" },
      { id: "2", thumbnail: "https://via.placeholder.com/150" },
      { id: "3", thumbnail: "https://via.placeholder.com/150" },
      { id: "4", thumbnail: "https://via.placeholder.com/150" },
      { id: "5", thumbnail: "https://via.placeholder.com/150" },
    ],
  },
]

const CourseComponent = (course: Course) => {
  const [expandedCourse, setExpandedCourse] = useState(false)
  let { id, title, lessons } = course
  const toggleDropdown = () => {
    setExpandedCourse(!expandedCourse)
  }

  const LessonComponent = (lesson: Lesson) => (
    <View style={styles.thumbnailContainer}>
      <Image source={{ uri: lesson.thumbnail }} style={styles.thumbnail} />
    </View>
  )
  return (
    <View style={styles.courseContainer}>
      <TouchableOpacity onPress={() => toggleDropdown()} style={styles.courseHeader}>
        <Text style={styles.courseTitle}>{title}</Text>
        <AntDesign name={expandedCourse ? "up" : "down"} size={20} color="black" />
      </TouchableOpacity>
      {expandedCourse && (
        <View style={styles.dropdown}>
          <FlatList
            data={lessons}
            renderItem={({ item }) => <LessonComponent {...item} />}
            keyExtractor={(lesson) => id + lesson.id}
            horizontal
          />
          <TouchableOpacity style={styles.addVideoContainer}>
            <View style={styles.addVideo}>
              <AntDesign name="plus" size={24} color="black" />
            </View>
            <Text>Add Video</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
export default CourseComponent

const styles = StyleSheet.create({
  courseContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdown: {
    marginTop: 10,
  },
  thumbnailContainer: {
    marginRight: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  addVideoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  addVideo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginRight: 10,
  },
})
