const colors = {
  black: '#000000',
  gray: '#343434',
  primary: '#26BFBF',
  secondary: '#FC6170',
  tertiary: '#FF8A47',
  white: '#ffffff'
}

export default {
  palette: {
    backgroundColor: colors.white,
    textColor: colors.gray,
    primaryColor: colors.primary,
    secondaryColor: colors.secondary,
    button: {
      backgroundColor: colors.secondary,
      textColor: colors.white,
      hover: {
        backgroundColor: colors.tertiary,
        textColor: colors.white
      }
    },
    header: {
      backgroundColor: colors.primary,
      textColor: colors.white
    }
  }
}
