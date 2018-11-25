import React, {Component} from 'react'
import sanFrancisco from './city-photos/san-francisco.jpg'
import vancouver from './city-photos/vancouver.jpg'
import tokyo from './city-photos/tokyo.jpg'
import osaka from './city-photos/osaka.jpg'
import losAngeles from './city-photos/los-angeles.jpg'
import newYork from './city-photos/new-york.jpg'
import chicago from './city-photos/chicago.jpg'
import mykonos from './city-photos/mykonos.jpg'
import brooklyn from './city-photos/brooklyn.jpg'
import sanFranciscoBlurred from './city-photos/san-francisco-blurred.jpg'
import vancouverBlurred from './city-photos/vancouver-blurred.jpg'
import tokyoBlurred from './city-photos/tokyo-blurred.jpg'
import osakaBlurred from './city-photos/osaka-blurred.jpg'
import losAngelesBlurred from './city-photos/los-angeles-blurred.jpg'
import newYorkBlurred from './city-photos/new-york-blurred.jpg'
import chicagoBlurred from './city-photos/chicago-blurred.jpg'
import mykonosBlurred from './city-photos/mykonos-blurred.jpg'
import brooklynBlurred from './city-photos/brooklyn-blurred.jpg'


class App extends Component {

  constructor(props) {

    super(props)

    this.staggerTime = 200
    this.animationTime = 1700
    this.isChrome = () => {

      if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        return true
      } else {
        return false
      }
    }

    this.state = {
      cities: [
        {
          name: 'San Francisco',
          coverImg: sanFrancisco,
          coverImgBlurred: sanFranciscoBlurred,
        },
        {
          name: 'Vancouver',
          coverImg: vancouver,
          coverImgBlurred: vancouverBlurred,
        },
        {
          name: 'Tokyo',
          coverImg: tokyo,
          coverImgBlurred: tokyoBlurred,
        },
        {
          name: 'Osaka',
          coverImg: osaka,
          coverImgBlurred: osakaBlurred,
        },
        {
          name: 'Los Angeles',
          coverImg: losAngeles,
          coverImgBlurred: losAngelesBlurred,
        },
        {
          name: 'New York',
          coverImg: newYork,
          coverImgBlurred: newYorkBlurred,
        },
        {
          name: 'Chicago',
          coverImg: chicago,
          coverImgBlurred: chicagoBlurred,
        },
        {
          name: 'Mykonos',
          coverImg: mykonos,
          coverImgBlurred: mykonosBlurred,
        },
        {
          name: 'Brooklyn',
          coverImg: brooklyn,
          coverImgBlurred: brooklynBlurred,
        },
      ],
      animatedItems: [],
      browserWidth: 0,
      isHovering: false,
    }
  }

  render() {
    return (
      <div style={this.style0()}>
        <ul style={this.style1()} onClick={window.location.reload.bind(window.location)} onMouseOver={() => this.setState({isHovering: true})} onMouseOut={() => this.setState({isHovering: false})}>
          {
            this.state.cities.map((city, index) => {
              return (
                <li key={index} style={this.style2(index)}>
                  <img src={city.coverImgBlurred} style={this.style5()}/>
                  <div style={this.style3(city.coverImg)}></div>
                  <div style={this.style4()}>{city.name}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  componentDidMount() {

    this.setState({
      browserWidth: window.innerWidth,
    })

    window.onresize = () => {

      this.setState({
        browserWidth: window.innerWidth,
      })
    }

    this.state.cities.map((city, index) => {

      return setTimeout(() => {

        this.setState((prevState) => ({animatedItems: prevState.animatedItems.concat(index)}))
      }, this.staggerTime * index)
    })
  }

  style0() {

    const transition = 'all 2000ms linear'


    return {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#202020',
      transition: transition,
      msTransition: transition,
      WebkitTransition: transition,
    }
  }

  style1() {
    return {
      position: 'relative',
      display : 'flex',
      flexFlow : 'column',
      margin: `${this.state.browserWidth < 700 ? '0' : '10vw 0'}`,
      // padding: '1rem',
      backgroundColor: `${this.state.isHovering ? 'hotpink' : 'transparent'}`,
      width: `${this.state.browserWidth < 700 ? '100%' : '60vw'}`,
      maxWidth: 1024,
    }
  }

  style2(index) {

    const isAnimated = this.state.animatedItems.indexOf(index) >= 0
    const transform = `translateY(${isAnimated ? 0 : '100vh'})`
    const transition = `transform ${this.animationTime}ms cubic-bezier(0.37, 0.39, 0.02, 1)`


    return {
      position: `${isAnimated ? 'static' : 'absolute'}`,
      display: 'flex',
      alignItems: 'center',
      height: `${isAnimated ? 'inherit' : '30vw'}`,
      color: '#999999',
      fontFamily: 'Roboto, sans-serif',
      overflow: 'hidden',
      opacity: `${isAnimated ? 1 : 0}`,
      transform: transform,
      msTransform: transform,
      WebkitTransform: transform,
      transition: transition,
      msTransition: transition,
      WebkitTransition: transition,
      cursor: 'pointer',
      opacity: this.state.isHovering ? 0.6 : 1,
    }
  }

  style3(thumbnail) {
    return {
      position: 'relative',
      minWidth: this.state.browserWidth * 0.13,
      minHeight: this.state.browserWidth * 0.13,
      backgroundImage: `url(${thumbnail})`,
      backgroundSize: 'cover',
    }
  }

  style4() {
    return {
      position: 'relative',
      alignSelf: 'flex-end',
      padding: '2% 3% 3%',
      width: '100%',
      fontSize: this.state.browserWidth * 0.02,
      // whiteSpace: 'nowrap',
      // overflow: 'hidden',
      color: '#ffffff',
      // textOverflow: 'ellipsis',
    }
  }

  style5() {

    const transform = `${this.isChrome() ? 'scale(1.5)' : 'scale(1)'}`
    const filter = 'brightness(25%)'

    return {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      filter: filter,
      msFilter: filter,
      WebkitFilter: filter,
      transform: transform,
      msTransform: transform,
      WebkitTransform: transform,
      backgroundColor: 'black',
      border: 'none',
      objectFit: 'cover',
    }
  }
}

export default App
