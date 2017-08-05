import React, {Component} from 'react'


class App extends Component {

  constructor(props) {

    super(props)
    this.state = {
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
                <li key={index} style={this.style2(index)}>
                  <div style={this.style5(city.coverImg)}></div>
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

    this.setState({browserWidth: window.innerWidth})

    window.onresize = () => {

      this.setState({
        browserWidth: window.innerWidth,
        browserHeight: window.innerHeight,
      })
    }

    this.state.cities.map((city, index) => {

      return setTimeout(() => {

        this.setState((prevState) => ({animatedItems: prevState.animatedItems.concat(index)}))
      }, 200 * index)
    })
  }

  style0() {
    return {
      position: 'absolute',
      width: '100%',
      minHeight: '100vh',
      // height: '100%',
      backgroundColor: '#989898',
      // transition: 'all 200ms ease-out',
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
      backgroundColor: 'white',
      color: '#999999',
      fontFamily: 'Roboto, sans-serif',
      overflow: 'hidden',
      opacity: `${isAnimated ? 1 : 0}`,
      transform: `translateY(${isAnimated ? 0 : '100vh'})`,
      transition: 'transform 1500ms cubic-bezier(0.16, 0.77, 0.45, 0.98), height 2000ms cubic-bezier(0.16, 0.77, 0.45, 0.98)',
    }
  }

  style3(thumbnail) {
    return {
      position: 'relative',
      minWidth: this.state.browserWidth * 0.0921052,
      minHeight: this.state.browserWidth * 0.0921052,
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
      position: 'absolute',
      padding: '8%',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${thumbnail})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(30px) brightness(30%)',
      // transform: 'scale(1.25)',
    }
  }
}

export default App
