import React, { FC } from "react"
import * as Application from "expo-application"
import { Linking, Platform, TextStyle, View, ViewStyle } from "react-native"
import { Button, ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { useStores } from "../models"

/**
 * @param {string} url - The URL to open in the browser.
 * @returns {void} - No return value.
 */
function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}

export const DemoSettingsScreen: FC<DemoTabScreenProps<"DemoSettings">> =
  function DemoSettingsScreen(_props) {
    const {
      authenticationStore: { logout },
    } = useStores()

    const profileImageUrl = "https://via.placeholder.com/150" // Replace with your image URL

    const containerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      height: "100vh",
    }

    const headerStyle: React.CSSProperties = {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }

    const profileImageStyle: React.CSSProperties = {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
    }

    const contentStyle: React.CSSProperties = {
      marginTop: "20px",
      width: "100%",
      textAlign: "center",
    }

    const usingHermes = typeof HermesInternal === "object" && HermesInternal !== null
    // @ts-expect-error
    const usingFabric = global.nativeFabricUIManager != null

    const demoReactotron = React.useMemo(
      () => async () => {
        if (__DEV__) {
          console.tron.display({
            name: "DISPLAY",
            value: {
              appId: Application.applicationId,
              appName: Application.applicationName,
              appVersion: Application.nativeApplicationVersion,
              appBuildVersion: Application.nativeBuildVersion,
              hermesEnabled: usingHermes,
            },
            important: true,
          })
        }
      },
      [],
    )

    return (
      <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <h1>Profile Page</h1>
            <img src={profileImageUrl} alt="Profile" style={profileImageStyle} />
          </div>
          <div style={contentStyle}>
            <h2>Your Name</h2>
            <p>
              Your bio or description goes here. This is where you can add more information about
              yourself.
            </p>
          </div>
        </div>
        {/* <Text
          style={$reportBugsLink}
          tx="demoSettingsScreen.reportBugs"
          onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite/issues")}
        />
        <Text style={$title} preset="heading" tx="demoSettingsScreen.title" />
        <View style={$itemsContainer}>
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">App Id</Text>
                <Text>{Application.applicationId}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">App Name</Text>
                <Text>{Application.applicationName}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">App Version</Text>
                <Text>{Application.nativeApplicationVersion}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">App Build Version</Text>
                <Text>{Application.nativeBuildVersion}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">Hermes Enabled</Text>
                <Text>{String(usingHermes)}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">Fabric Enabled</Text>
                <Text>{String(usingFabric)}</Text>
              </View>
            }
          />
        </View>
        <View style={$buttonContainer}>
          <Button style={$button} tx="demoSettingsScreen.reactotron" onPress={demoReactotron} />
          <Text style={$hint} tx={`demoSettingsScreen.${Platform.OS}ReactotronHint` as const} />
        </View>
        <View style={$buttonContainer}>
          <Button style={$button} tx="common.logOut" onPress={logout} />
        </View> */}
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.xxl,
}

const $reportBugsLink: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.lg,
  alignSelf: isRTL ? "flex-start" : "flex-end",
}

const $item: ViewStyle = {
  marginBottom: spacing.md,
}

const $itemsContainer: ViewStyle = {
  marginBottom: spacing.xl,
}

const $button: ViewStyle = {
  marginBottom: spacing.xs,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.md,
}

const $hint: TextStyle = {
  color: colors.palette.neutral600,
  fontSize: 12,
  lineHeight: 15,
  paddingBottom: spacing.lg,
}
