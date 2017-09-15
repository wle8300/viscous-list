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
      isFinishedAnimating: false,
      cities: [
        {
          name: 'San Francisco',
          coverImg: sanFrancisco,
        },
        {
          name: 'Vancouver',
          coverImg: vancouver,
        },
        {
          name: 'Tokyo',
          coverImg: tokyo,
        },
        {
          name: 'Osaka',
          coverImg: osaka,
        },
        {
          name: 'Los Angeles',
          coverImg: losAngeles,
        },
        {
          name: 'New York',
          coverImg: newYork,
        },
        {
          name: 'Chicago',
          coverImg: chicago,
        },
        {
          name: 'Mykonos',
          coverImg: mykonos,
        },
        {
          name: 'Brooklyn',
          coverImg: brooklyn,
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
                <li key={index} style={this.style2(index)} onMouseEnter={this.handleMouseEnter.bind(this, index)}>
                  <img src={city.coverImg} style={this.style5()}/>
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

    console.log('process.env.PUBLIC_URL', process.env);

    this.setState({
      browserWidth: window.innerWidth,
    })

    setTimeout(() => {
      this.setState({isFinishedAnimating: true})
    }, 0)

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

  handleMouseEnter(index) {
    console.log(index)
  }

  style0() {

    const transition = 'all 2000ms linear'


    return {
      position: 'absolute',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: `${this.state.isFinishedAnimating ? '#333333' : '#676767'}`,
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
      margin: `${this.state.browserWidth < 700 ? '0' : '10vw auto'}`,
      padding: '1rem',
      backgroundColor: `${this.state.isHovering ? 'hotpink' : 'transparent'}`,
      width: `${this.state.browserWidth < 700 ? '100%' : '50vw'}`,
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
      minWidth: this.state.browserWidth * 0.1,
      minHeight: this.state.browserWidth * 0.1,
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
      fontSize: this.state.browserWidth * 0.01948,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      color: '#ffffff',
      textOverflow: 'ellipsis',
    }
  }

  style5(thumbnail) {

    const transform = `${this.isChrome() ? 'scale(1.5)' : 'scale(1)'}`
    const filter = `${this.isChrome() ? 'blur(15px) brightness(45%)' : 'brightness(10%)'}`


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
      backgroundColor: `${this.isChrome() ? 'transparent' : 'black'}`,
      border: 'none',
      objectFit: `${this.isChrome() ? 'inherit' : 'cover'}`,
    }
  }
}

export default App
