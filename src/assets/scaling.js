import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

// Dimensions taken from Figma used for modelling
const modelWidth = 375
const modelHeight = 667

// Model dimensions * scale = real dimensions.  Scale = real/model.
const heightScalar = height / modelHeight
const widthScalar = width / modelWidth

const scaleHeight = (itemHeight) => {
  return (itemHeight * heightScalar)
}

const scaleWidth = (itemWidth) => {
  return (itemWidth * widthScalar)
}

const lesserScalar = (measurement) => {
  return ((heightScalar < widthScalar) ? heightScalar : widthScalar)
}

export { scaleHeight, scaleWidth, lesserScalar }
