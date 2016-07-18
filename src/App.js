import React from 'react';
import Scroll from'react-scroll';
import Nav from './components/Nav';

const Link = Scroll.Link,
      Element = Scroll.Element;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainHeading: true,
            navDark: false,
            activeService: 0
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.servicesDisplaySwitch = this.servicesDisplaySwitch.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        if (document.body.scrollTop > 614) {
            return this.setState({navDark: true});
        }

        this.setState({navDark: false});

        if (document.body.scrollTop > 390) {
            return this.setState({mainHeading: false});
        }
        this.setState({mainHeading: true});
    }

    servicesDisplaySwitch(serviceNum) {
        this.setState({ activeService: serviceNum });
    }

    render() {
        const styles = {
            show: {
                display: 'initial'
            },
            hide: {
                display: 'none'
            }
        }

        const services = [ 
            {
                name: 'Merger Integration',
                icon: 'add-3.svg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum ipsum id odio laoreet, rutrum gravida felis tempor. Sed aliquam porta ullamcorper. Nullam rutrum auctor efficitur. In in neque felis. Pellentesque fermentum efficitur molestie. Morbi vitae finibus sem, nec pretium mauris. Cras in iaculis dolor. Donec ut leo purus. Maecenas facilisis in nibh dignissim ultricies. Praesent et elit nec sem suscipit fermentum id ac elit. Integer dapibus ante arcu, at commodo dui bibendum sed. Proin venenatis placerat erat vitae iaculis. Fusce ultrices bibendum justo vitae consequat. Donec risus nunc, consequat id turpis sed, bibendum eleifend libero. Curabitur vehicula tristique diam, sed ornare tortor tempor ac. Maecenas vitae placerat nisi, id suscipit massa.'
            }, 
            {
                name: 'Technology',
                icon: 'cloud-computing-2.svg',
                text: 'Curabitur facilisis elit nunc, id tempus purus pretium laoreet. Nam ut lorem id justo venenatis auctor. Quisque et pellentesque ipsum, elementum condimentum ex. Nam ut urna interdum ipsum viverra molestie. Pellentesque a nibh ut massa finibus mattis in et risus. Etiam sagittis sit amet purus ut ornare. Quisque sodales eleifend orci in malesuada. Suspendisse potenti. Curabitur vitae magna porttitor, porttitor nibh ac, interdum nibh. Vivamus dignissim eget lorem in lobortis. Nunc consequat eleifend purus id feugiat. Nunc in enim mattis magna tincidunt cursus. Phasellus at feugiat velit, porttitor convallis ante. Vestibulum leo lacus, aliquet sed turpis sed, euismod ullamcorper metus. Vestibulum at pellentesque mi, ac lacinia elit. Vestibulum in dolor et tortor placerat vehicula.'
            }, 
            {
                name: 'Model Change',
                icon: 'paper-plane-1.svg',
                text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel sollicitudin sapien. Suspendisse eget dolor mauris. Vivamus eu diam finibus, varius mi in, lobortis enim. Ut libero justo, sollicitudin et diam nec, pulvinar faucibus nibh. Nullam ullamcorper luctus condimentum. Nunc magna mi, porta non ex quis, malesuada luctus ipsum. Integer ut faucibus enim. Sed convallis, urna porta auctor pretium, magna nisl pellentesque sem, eu posuere leo enim nec risus. Maecenas aliquet tellus a erat mollis, id semper tortor feugiat. Ut in fringilla felis. Mauris et dolor semper quam elementum aliquet a nec mauris. Etiam a diam id magna venenatis aliquet quis elementum est. Mauris sit amet mattis magna.'
            }, 
            {
                name: 'IT Optimization',
                icon: 'battery.svg',
                text: 'Curabitur imperdiet luctus viverra. Curabitur leo risus, lobortis non mattis eget, scelerisque vel nisi. Fusce molestie eu mi vitae bibendum. Sed tempus tortor aliquet lobortis cursus. Donec tempor ipsum a turpis suscipit, sit amet pulvinar odio egestas. Suspendisse ac tempor ipsum, sed faucibus quam. Duis eget metus fringilla nunc cursus maximus ut gravida massa. Vestibulum eget aliquet quam.'
            }, 
            {
                name: 'Sustainability',
                icon: 'worldwide.svg',
                text: 'Aenean ornare turpis in leo volutpat varius. Vivamus dui velit, luctus a auctor a, efficitur in dui. Morbi consequat aliquam maximus. Morbi porta ipsum non ante tincidunt maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac felis eu augue tempor luctus. Cras porta felis ut orci laoreet varius nec eu justo. Nam eu ligula vulputate, lacinia ex a, aliquet magna. Nam non augue vel metus sollicitudin pellentesque lacinia sed mi. In nec metus magna. Ut ac bibendum purus. Ut nulla magna, consectetur nec luctus sed, finibus hendrerit nisi. Morbi id volutpat leo, ut interdum massa. Fusce et finibus mauris, sed molestie tellus. Donec volutpat sapien sed dolor commodo pretium. Pellentesque pharetra neque arcu.'
            }, 
            {
                name: 'Acquisitions',
                icon: 'agenda.svg',
                text: 'Donec tempor ipsum a turpis suscipit, sit amet pulvinar odio egestas. Suspendisse ac tempor ipsum, sed faucibus quam. Duis eget metus fringilla nunc cursus maximus ut gravida massa. Vestibulum eget aliquet quam.  lacinia sed mi. In nec metus magna. Ut ac bibendum purus. Ut nulla magna, consectetur nec luctus sed, finibus hendrerit nisi. Morbi id volut.'
            } 
        ];

        const renderServicesDisplay = () => {
            const currentService = services[this.state.activeService];

            return (
                <div className="services--display">
                    <div className="services--display__heading">
                        { currentService.name }
                    </div>
                    <div className="services--display__body">
                        <div className="services--display__icon">
                            <img src={`/images/${currentService.icon}`} height="90px" />
                        </div>
                        <div className="services--display__text">
                            { currentService.text }
                        </div>
                    </div>
                </div>
            );
        }

        const renderServicesSidebarButtons = () => {
            return services.map((service, i) => {
                return (
                    <div 
                        key={`servicessidebarbtn${i}`} 
                        value={ this.state.activeService === i ? '1' : '0' } 
                        onClick={() => this.servicesDisplaySwitch(i)} 
                        className="services--sidebar__btn"
                    >
                        { service.name }
                    </div>
                );
            });
        }

        return (
            <div className="container">
                <Nav navDark={this.state.navDark} Link={Link}/>
                <div className="landing--container">
                    <h1 style={ this.state.mainHeading ? styles.show : styles.hide }>Discover Consulting Group</h1>
                </div>
                <Element name="home" className="landing--buffer"></Element>
                <div className="testimonial--container">
                    <div className="testimonial--quote">
                        <p>"Discover Consulting Group provided our complex Payroll implementation project with creative leadership and guidance to get us through the finish line, and helped us set the foundation to achieve our vision for Shared Services."</p>
                        <p>- Executive Director of Shared Services for a Fortune 500 Company in the Construction Industry</p>
                    </div>
                </div>
                <Element name="services" className="services--container">
                    <div className="services--heading">Services</div>
                    <div className="services--body">
                        { renderServicesDisplay() }
                        <div className="services--sidebar">
                            { renderServicesSidebarButtons() }
                        </div>
                    </div>
                </Element>
                <Element name="leadership" className="leadership--heading">
                    <h2>Thought Leadership</h2>
                </Element>
                <div className="leadership--container">
                    <div className="blogs--container">
                        <div className="leadership--item">
                            <div className="leadership--item__title">HR Technology Innovations Survey</div>
                            <div className="leadership--item__time">1:18 pm | Uncategorized | June 20, 2016</div>
                            <div className="leadership--item__body">The objective of this online survey is to gather information about how companies perceive new technology innovations are being used…</div>
                            <div className="leadership--item__continue">Continue Reading...</div>
                        </div>
                        <div className="leadership--item">
                            <div className="leadership--item__title">In Aliquet Neque In Porttitor Feugiat</div>
                            <div className="leadership--item__time">6:07 pm | Uncategorized | April 30, 2016</div>
                            <div className="leadership--item__body">Maecenas pellentesque est sed risus pharetra egestas. Nam consectetur, purus ac finibus congue, nunc tellus pellentesque magna, a mattis quam ligula a felis…</div>
                            <div className="leadership--item__continue">Continue Reading...</div>
                        </div>
                        <div className="leadership--item">
                            <div className="leadership--item__title">Donec Tempor Malesuada Pretium</div>
                            <div className="leadership--item__time">8:37 am | Uncategorized | March 15, 2016</div>
                            <div className="leadership--item__body">Donec elit urna, consectetur sit amet suscipit et, posuere sit amet lectus. Vestibulum sollicitudin hendrerit velit nec sollicitudin. Vestibulum ultrices maximus lacus non molestie. Fusce eros justo, cursus nec massa in, rhoncus posuere tellus. Praesent ut posuere magna, at gravida mauris…</div>
                            <div className="leadership--item__continue">Continue Reading...</div>
                        </div>
                        <div className="browse">Browse the rest of our articles</div>
                    </div>
                    <div className="surverys--container">

                    </div>
                </div>
                <Element name="about" className="about--container">
                    <h1 className="about--container__title">Who We Are</h1>
                    <div className="about--container__body">
                        <div className="about--container__subtitle">
                                 Discover Consulting Group was established with the goal of helping solve our clients’ most challenging operational and technical issues. Our team of professionals has successfully delivered strategy, operations and technology projects for large multinational organizations spanning the financial services, life sciences, healthcare, manufacturing, retail and telecommunications industries and federal, state & local government and higher education institutions. Our experience spans a broad spectrum of specialties, including management, finance, human resources and information technology.
                        </div>
                        <div className="about--container__name">
                            <h1>Manny Ramirez</h1>
                        </div>
                        <div className="personal--container">
                            <div className="headshot--container">
                                <img src="/images/headshot.jpg" height="300px" />
                            </div>
                            <div className="resume--container">
                                <p>Emmanuel (Manny) is the Managing Principal of Discover Consulting Group. Manny previously held leadership positions at KPMG LLP, BearingPoint, Deloitte Consulting and IBM. He has assisted many organizations in solving operational deficiencies by developing and executing strategies to transform the way services are delivered. He has over twenty-five years of business transformation experience and has restructured back-office operations and implemented shared service centers for global organizations. In addition, Manny has over fifteen years of experience implementing large scale ERP (SAP, PeopleSoft and Oracle) and web-based enabling technologies.</p>
                                <p>Manny has an ability to quickly understand client business problems and uses his knowledge of HR, Finance and IT to provide thoughtful and innovative solutions. He brings a creative and honest approach to problem solving by focusing on unexpected-value to his clients. His specific industry experiences include chemicals, consumer products, life sciences, retail and transportation.</p>
                                <p>Manny has a Bachelor’s Degree in Computer Science from the University of North Dakota. He resides in Newtown Square, Pennsylavnia with his wife, Anne Louise and has four children.</p>
                            </div> 
                        </div>
                    </div>
                </Element>
                <div className="partners--container">
                    We're proud to frequently partner and do projects with <span>&nbsp;Interra Consulting</span>
                </div>
                <Element name="contact" className="footer">
                    <div className="footer--title">
                        Contact Us
                    </div>
                    <div className="footer--body">
                        <div className="footer--email">
                            <div className="footer--item__icon footer--email__icon">
                                <svg x="0px" y="0px" height="80px" viewBox="0 0 60 60">
                                    <g>
                                        <path d="M42.5,22h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,22,42.5,22z"/>
                                        <path d="M17.5,16h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S16.948,16,17.5,16z"/>
                                        <path d="M42.5,30h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,30,42.5,30z"/>
                                        <path d="M42.5,38h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,38,42.5,38z"/>
                                        <path d="M42.5,46h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,46,42.5,46z"/>
                                        <path d="M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z"/>
                                    </g>
                                </svg>

                            </div>
                            <div className="footer--item__title">
                                <div>info@discovercgllc.com</div>
                            </div>
                        </div>
                        <div className="footer--tel">
                            <div className="footer--item__icon">
                                <svg x="0px" y="0px" viewBox="0 0 60 60" height="80px">
                                    <g>
                                        <path d="M42.595,0H17.405C14.977,0,13,1.977,13,4.405v51.189C13,58.023,14.977,60,17.405,60h25.189C45.023,60,47,58.023,47,55.595
                                            V4.405C47,1.977,45.023,0,42.595,0z M15,8h30v38H15V8z M17.405,2h25.189C43.921,2,45,3.079,45,4.405V6H15V4.405
                                            C15,3.079,16.079,2,17.405,2z M42.595,58H17.405C16.079,58,15,56.921,15,55.595V48h30v7.595C45,56.921,43.921,58,42.595,58z"/>
                                        <path d="M30,49c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S32.206,49,30,49z M30,55c-1.103,0-2-0.897-2-2s0.897-2,2-2
                                            s2,0.897,2,2S31.103,55,30,55z"/>
                                        <path d="M26,5h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1S25.447,5,26,5z"/>
                                        <path d="M33,5h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1c-0.553,0-1,0.447-1,1S32.447,5,33,5z"/>
                                        <path d="M56.612,4.569c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c3.736,3.736,3.736,9.815,0,13.552
                                            c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
                                            C61.128,16.434,61.128,9.085,56.612,4.569z"/>
                                        <path d="M52.401,6.845c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c1.237,1.237,1.918,2.885,1.918,4.639
                                            s-0.681,3.401-1.918,4.638c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
                                            c1.615-1.614,2.504-3.764,2.504-6.052S54.017,8.459,52.401,6.845z"/>
                                        <path d="M4.802,5.983c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-4.516,4.516-4.516,11.864,0,16.38
                                            c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
                                            C1.065,15.799,1.065,9.72,4.802,5.983z"/>
                                        <path d="M9.013,6.569c-0.391-0.391-1.023-0.391-1.414,0c-1.615,1.614-2.504,3.764-2.504,6.052s0.889,4.438,2.504,6.053
                                            c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
                                            c-1.237-1.237-1.918-2.885-1.918-4.639S7.775,9.22,9.013,7.983C9.403,7.593,9.403,6.96,9.013,6.569z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="footer--item__title">
                                <div>(610) 772-3148</div>
                            </div>
                        </div>
                        <div className="footer--address">
                            <div className="footer--item__icon">
                                <svg x="0px" y="0px" viewBox="0 0 55.017 55.017" height="80px">
                                    <g>
                                        <path d="M51.688,23.013H40.789c-0.553,0-1,0.447-1,1s0.447,1,1,1h9.102l2.899,27H2.268l3.403-27h9.118c0.553,0,1-0.447,1-1
                                            s-0.447-1-1-1H3.907L0,54.013h55.017L51.688,23.013z"/>
                                        <path d="M26.654,38.968c-0.147,0.087-0.304,0.164-0.445,0.255c-0.22,0.142-0.435,0.291-0.646,0.445
                                            c-0.445,0.327-0.541,0.953-0.215,1.398c0.196,0.267,0.5,0.408,0.808,0.408c0.205,0,0.412-0.063,0.591-0.193
                                            c0.178-0.131,0.359-0.257,0.548-0.379c0.321-0.208,0.662-0.403,1.014-0.581c0.468-0.237,0.658-0.791,0.462-1.269
                                            c0.008-0.008,0.018-0.014,0.025-0.022c1.809-1.916,7.905-9.096,10.429-21.058c0.512-2.426,0.627-4.754,0.342-6.919
                                            c-0.86-6.575-4.945-10.051-11.813-10.051c-6.866,0-10.951,3.476-11.813,10.051c-0.284,2.166-0.169,4.494,0.343,6.919
                                            C18.783,29.818,24.783,36.97,26.654,38.968z M17.924,11.314c0.733-5.592,3.949-8.311,9.831-8.311c5.883,0,9.098,2.719,9.83,8.311
                                            c0.255,1.94,0.148,4.043-0.316,6.247C35,28.314,29.59,35.137,27.755,37.207c-1.837-2.072-7.246-8.898-9.514-19.646
                                            C17.776,15.357,17.67,13.255,17.924,11.314z"/>
                                        <path d="M27.755,19.925c4.051,0,7.346-3.295,7.346-7.346s-3.295-7.346-7.346-7.346s-7.346,3.295-7.346,7.346
                                            S23.704,19.925,27.755,19.925z M27.755,7.234c2.947,0,5.346,2.398,5.346,5.346s-2.398,5.346-5.346,5.346s-5.346-2.398-5.346-5.346
                                            S24.808,7.234,27.755,7.234z"/>
                                        <path d="M31.428,37.17c-0.54,0.114-0.884,0.646-0.769,1.187c0.1,0.47,0.515,0.791,0.977,0.791c0.069,0,0.14-0.007,0.21-0.022
                                            c0.586-0.124,1.221-0.229,1.886-0.313c0.548-0.067,0.938-0.567,0.869-1.115c-0.068-0.549-0.563-0.945-1.115-0.869
                                            C32.763,36.918,32.07,37.033,31.428,37.17z"/>
                                        <path d="M36.599,37.576c0.022,0.537,0.466,0.957,0.998,0.957c0.015,0,0.029,0,0.044-0.001l2.001-0.083
                                            c0.551-0.025,0.979-0.493,0.953-1.044c-0.025-0.553-0.539-0.984-1.044-0.954l-1.996,0.083
                                            C37.003,36.557,36.575,37.023,36.599,37.576z"/>
                                        <path d="M22.433,42.177c-0.514,0.388-1.045,0.761-1.58,1.107c-0.463,0.301-0.595,0.92-0.294,1.384
                                            c0.191,0.295,0.513,0.455,0.84,0.455c0.187,0,0.375-0.052,0.544-0.161c0.573-0.372,1.144-0.772,1.695-1.188
                                            c0.44-0.333,0.528-0.96,0.196-1.401C23.501,41.936,22.876,41.844,22.433,42.177z"/>
                                        <path d="M44.72,35.583c-0.338,0.237-0.777,0.409-1.346,0.526c-0.541,0.111-0.889,0.641-0.777,1.182
                                            c0.098,0.473,0.514,0.798,0.979,0.798c0.067,0,0.135-0.007,0.203-0.021c0.842-0.174,1.526-0.452,2.096-0.853l0.134-0.098
                                            c0.44-0.334,0.527-0.961,0.194-1.401c-0.334-0.44-0.96-0.526-1.401-0.194L44.72,35.583z"/>
                                        <path d="M8.86,43.402c0.145-0.533-0.171-1.082-0.704-1.226c-0.529-0.149-1.082,0.169-1.226,0.704
                                            c-0.126,0.464-0.201,0.938-0.225,1.405C6.7,44.4,6.697,44.516,6.697,44.638c0.001,0.196,0.01,0.392,0.029,0.587
                                            c0.053,0.515,0.487,0.898,0.994,0.898c0.033,0,0.067-0.002,0.103-0.005c0.549-0.057,0.949-0.547,0.894-1.097
                                            c-0.014-0.131-0.019-0.264-0.02-0.39c0-0.083,0.003-0.166,0.007-0.248C8.72,44.059,8.772,43.728,8.86,43.402z"/>
                                        <path d="M44.698,27.81c-0.794-0.106-1.604-0.041-2.386,0.181c-0.532,0.149-0.841,0.702-0.69,1.233
                                            c0.124,0.441,0.525,0.729,0.961,0.729c0.091,0,0.182-0.012,0.272-0.038c0.52-0.146,1.055-0.192,1.575-0.122
                                            c0.562,0.07,1.052-0.311,1.125-0.857C45.629,28.387,45.245,27.884,44.698,27.81z"/>
                                        <path d="M46.688,32.764c-0.163,0.527,0.133,1.088,0.66,1.25c0.099,0.031,0.197,0.045,0.295,0.045c0.428,0,0.823-0.275,0.955-0.705
                                            c0.099-0.318,0.16-0.641,0.183-0.963c0.005-0.083,0.008-0.167,0.008-0.25c0-0.468-0.086-0.937-0.255-1.392
                                            c-0.192-0.519-0.771-0.781-1.285-0.59c-0.519,0.192-0.782,0.768-0.59,1.285c0.086,0.232,0.13,0.467,0.13,0.696l-0.003,0.117
                                            C46.774,32.423,46.742,32.589,46.688,32.764z"/>
                                        <path d="M17.481,45.164c-0.586,0.275-1.183,0.53-1.774,0.759c-0.515,0.198-0.771,0.777-0.572,1.293
                                            c0.153,0.396,0.531,0.64,0.933,0.64c0.12,0,0.242-0.021,0.36-0.067c0.635-0.245,1.275-0.519,1.903-0.813
                                            c0.5-0.234,0.715-0.83,0.48-1.33C18.578,45.145,17.984,44.928,17.481,45.164z"/>
                                        <path d="M10.201,41.001c0.161,0,0.325-0.039,0.478-0.122c0.288-0.157,0.595-0.255,0.911-0.289c0.135-0.016,0.273-0.016,0.406,0.002
                                            c0.563,0.073,1.05-0.313,1.122-0.86c0.072-0.548-0.313-1.05-0.86-1.122c-0.298-0.039-0.601-0.041-0.891-0.008
                                            c-0.574,0.063-1.128,0.239-1.646,0.521c-0.485,0.265-0.664,0.871-0.399,1.356C9.504,40.813,9.847,41.001,10.201,41.001z"/>
                                        <path d="M9.993,48.842c0.216,0.056,0.436,0.098,0.654,0.124c0.256,0.031,0.512,0.047,0.769,0.047c0.313,0,0.627-0.022,0.94-0.062
                                            c0.548-0.069,0.937-0.569,0.867-1.117s-0.567-0.934-1.117-0.867c-0.404,0.052-0.812,0.064-1.216,0.015
                                            c-0.132-0.017-0.264-0.042-0.394-0.075c-0.535-0.143-1.08,0.181-1.22,0.716C9.139,48.158,9.459,48.704,9.993,48.842z"/>
                                    </g>
                                </svg>

                            </div>
                            <div className="footer--item__title__address">
                                <div>42 Thornbird Way</div>
                                <div>Newtown Square, Pennsylvania</div> 
                                <div>United States 19073</div>
                            </div>
                        </div>
                        <div className="footer--linkedin">
                            <div className="footer--item__icon">
                                <svg height="80px" viewBox="0 0 512 512">
                                    <g>
                                        <path d="M256,0 C114.609,0 0,114.609 0,256 C0,397.391 114.609,512 256,512 C397.391,512 512,397.391 512,256 C512,114.609 397.391,0 256,0 L256,0 Z M256.5,496 C124.223928,496 17,388.776072 17,256.5 C17,124.223928 124.223928,17 256.5,17 C388.776072,17 496,124.223928 496,256.5 C496,388.776072 388.776072,496 256.5,496 L256.5,496 Z"></path>
                                        <path d="M128.094,383.891 L176.094,383.891 L176.094,191.891 L128.094,191.891 L128.094,383.891 L128.094,383.891 Z M320.094,191.891 C279,192.579 258.782,222.532 256.094,223.891 L256.094,191.891 L208.094,191.891 L208.094,383.891 L256.094,383.891 L256.094,271.891 C256.094,267.782 266.219,234.891 304.094,239.891 C324.438,241.219 335.406,268.125 336.094,271.891 L336.094,383.891 L383.906,384.11 L383.906,251.188 C382.219,232 372.625,192.578 320.094,191.891 L320.094,191.891 Z M152.094,127.891 C138.844,127.891 128.094,138.625 128.094,151.891 C128.094,165.157 138.844,175.891 152.094,175.891 C165.344,175.891 176.094,165.157 176.094,151.891 C176.094,138.625 165.344,127.891 152.094,127.891 L152.094,127.891 Z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="footer--item__title">
                                <div>Linkedin</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer--copyright">Copyright &copy; 2016, Discover Consulting Group LLC. All rights reserved.</div>
                </Element>
            </div>
        );
    }
}

export default App;











