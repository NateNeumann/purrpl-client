import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { XAxis, YAxis, AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Back from './../components/Back'
import { getFeelingToday } from './../actions/progress-actions'

export default class ProgressTracking extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)

    this.state = {
      menuVisible: false,
      user: this.props.navigation.state.params.user,
      progress: null,
    }
  }
  componentWillMount = () => {
    getFeelingToday(this.state.user.id).then((progress) => {
      this.setState({ progress })
    })
  }
  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible })
  }
  formatDate = (value, index) => {
    switch (index) {
      case 0:
        return 'Sun'
      case 1:
        return 'Mon'
      case 2:
        return 'Tue'
      case 3:
        return 'Wed'
      case 4:
        return 'Thu'
      case 5:
        return 'Fri'
      case 6:
        return 'Sat'
      default:
        return null
    }
  }
  render() {
    let data = []
    let summary = ''
    if (this.state.progress) {
      data = this.state.progress.feelingToday
      summary = this.state.progress.summary
    }
    const contentInset = { top: 20, bottom: 20 }
    return (
      <View style={{ height: '100%' }}>
        <View style={styles.headerContainer}>
          <Back navigation={this.props.navigation} />
          <Text style={styles.header}>PROGRESS TRACKER</Text>
        </View>
        <Text style={[styles.summary, { textAlign: 'center', marginTop: 15 }]}>General Wellness</Text>
        <View style={{ height: 300, flexDirection: 'row' }}>
          <YAxis
            data={data}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            style={{ marginLeft: 10 }}
            numberOfTicks={7}
            formatLabel={value => `${value}`}
          />
          <AreaChart
            style={{ paddingLeft: 30, paddingRight: 30, flex: 1 }}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ stroke: 'rgb(127, 209, 255)', fill: 'rgb(127, 209, 255, 0.6)', strokeWidth: 2 }}
            gridMin={0}
            numberOfTicks={7}
          >
            <Grid />
          </AreaChart>
        </View>
        <XAxis
          style={{
            width: '100%',
            marginHorizontal: 10,
            paddingLeft: 20,
            paddingRight: 20,
          }}
          data={data}
          formatLabel={(value, index) => this.formatDate(value, index)}
          contentInset={{ left: 20, right: 20 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
        <View style={{ paddingLeft: 30 }}>
          <Text style={styles.summary}>Summary</Text>
          <Text style={styles.summaryDescription}>{summary}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#7FD1FF',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'raleway-bold',
    marginTop: 20,
    marginLeft: 25,
  },
  summary: {
    fontSize: 24,
    fontFamily: 'raleway-semi-bold',
    color: '#053867',
    marginTop: 10,
    marginBottom: 10,
  },
  summaryDescription: {
    fontSize: 18,
    fontFamily: 'Avenir Next',
    color: '#053867',
  },
})
