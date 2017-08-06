import React, {Component} from 'react'


class App extends Component {

  constructor(props) {

    super(props)

    this.staggerTime = 200
    this.animationTime = 1700

    this.state = {
      isFinishedAnimating: false,
      cities: [
        {
          name: 'San Francisco',
          coverImg: '/city-photos/san-francisco.jpg',
        },
        {
          name: 'Vancouver',
          coverImg: '/city-photos/vancouver.jpg',
        },
        {
          name: 'Tokyo',
          coverImg: '/city-photos/tokyo.jpg',
        },
        {
          name: 'Osaka',
          coverImg: '/city-photos/osaka.jpg',
        },
        {
          name: 'Los Angeles',
          coverImg: '/city-photos/los-angeles.jpg',
        },
        {
          name: 'New York',
          coverImg: '/city-photos/new-york.jpg',
        },
        {
          name: 'Chicago',
          coverImg: '/city-photos/chicago.jpg',
        },
        {
          name: 'Mykonos',
          coverImg: '/city-photos/mykonos.jpg',
        },
        {
          name: 'Brooklyn',
          coverImg: '/city-photos/brooklyn.jpg',
        },
      ],
      animatedItems: [],
      browserWidth: 0,
    }
  }

  render() {
    return (
      <div style={this.style0()}>
        <ul style={this.style1()}>
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
    return {
      position: 'absolute',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: `${this.state.isFinishedAnimating ? '#676767' : '#000000'}`,
      transition: 'all 2700ms linear',
    }
  }

  style1() {
    return {
      position: 'relative',
      display : 'flex',
      flexFlow : 'column',
      margin: `${this.state.browserWidth < 700 ? '0' : '10vw auto'}`,
      width: `${this.state.browserWidth < 700 ? '100%' : '50vw'}`,
    }
  }

  style2(index) {

    const isAnimated = this.state.animatedItems.indexOf(index) >= 0


    return {
      position: `${isAnimated ? 'static' : 'absolute'}`,
      display: 'flex',
      alignItems: 'center',
      height: `${isAnimated ? 'inherit' : '30vw'}`,
      color: '#999999',
      fontFamily: 'Roboto, sans-serif',
      overflow: 'hidden',
      opacity: `${isAnimated ? 1 : 0}`,
      transform: `translateY(${isAnimated ? 0 : '100vh'})`,
      transition: `transform ${this.animationTime}ms cubic-bezier(0.37, 0.39, 0.02, 1)`,
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
    return {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      filter: 'blur(15px) brightness(45%)',
      transform: 'scale(1.5)',
    }
  }
}

export default App
