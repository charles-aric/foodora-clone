import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import ThemeContext from '../../ui/ThemeContext/ThemeContext'
import { theme } from '../../utils/themeColors'

function Spinner(props) {
  const themeContext = useContext(ThemeContext)
  const currentTheme = theme[themeContext.ThemeValue]

  return (
    <ActivityIndicator
      animating={true}
      style={{
        flex: 1,
        backgroundColor: props.backColor
          ? props.backColor
          : currentTheme.themeBackground
      }}
      size={props.size || 'large'}
      color={
        props.spinnerColor ? props.spinnerColor : currentTheme.spinnerColor
      }
    />
  )
}
export default Spinner
