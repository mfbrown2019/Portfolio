import "../CSS/App.css";
import github from "../Pictures/github.png";
import linkedin from "../Pictures/linkedin.png";
import me from "../Pictures/headShot.png";
import golf from "../Pictures/fullbody.jpg";
import resume from "../MISC/Matthew Brown Resume.docx";
import frontend from "../Pictures/logo-react-icon.png";
import backend from "../Pictures/backend.png";
import sql from "../Pictures/sql.png";
import chessCover from "../Pictures/chessCover.png";
import phone from "../Pictures/phone.png";
import email from "../Pictures/email.png";

function App() {
    return (
        <div className="App">
            <div className="container-1">
                <div className="container-box img">
                    <img src={me} height="150"></img>
                </div>
                <div className="whitespace">Matthew Brown</div>
                <div className="container-box hover">Home</div>
                <div className="container-box hover">About</div>
                <div className="container-box hover">Projects</div>
                <div className="container-box hover">Work Experience</div>
                <div className="container-box hover whitespace">Contact Me</div>
                <div className="container-box">
                    <a href="https://github.com/mfbrown2019?tab=repositories">
                        <img src={github} height="50"></img>
                    </a>
                </div>
                <div className="container-box">
                    <a href="https://www.linkedin.com/in/matthew-brown-3b73b9207/?trk=public-profile-join-page">
                        <img src={linkedin} height="50"></img>
                    </a>
                </div>
            </div>

            <div className="FullPage">
                <div className="home">
                    <div className="title">
                        <h1 className="">Matthew Brown</h1>
                        <h3 className="">Full Stack Developer</h3>
                    </div>
                </div>
                <div className="about-grid">
                    <h2 className="title">
                        <b>ABOUT</b>
                    </h2>

                    <img className="image" src={golf}></img>

                    <div className="content">
                        {/* <img></img> */}

                        <h1>I'm Matthew Brown, a Full Stack Developer</h1>
                        <div>
                            <p>
                                I am a Software Developer located in South
                                Carolina and have been coding for years. I am
                                currently pursing and Undergraduate / Masters
                                Degree in Computer Science at Florida Tech. I
                                love implementing ideas and seeing an
                                application come together. I work quick and am
                                very adaptable. Take a look at some of my
                                projects and skills and lets see if we can work
                                together.
                            </p>
                            <p className="space">Name: Matthew Brown</p>
                            <p>Email: mbrown2019@my.fit.edu</p>
                            <p>Located: South Carolina</p>
                            <p>GPA: 3.57</p>
                            <p>Graduation Date: May 2023</p>
                        </div>
                        <a
                            href={resume}
                            download
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="skills-grid">
                    <h2 className="title">
                        <b>SKILLS</b>
                    </h2>
                    <div className="front-end">
                        <div className="original">
                            <h1>Front End</h1>
                            <img src={frontend}></img>
                            <p>HTML CSS JS REACT</p>
                        </div>
                        <div className="card-content">
                            <h5 className="html-name">HTML</h5>
                            <div className="full-html">
                                <p className="html-percent">80%</p>
                            </div>
                            <h5 className="css-name">CSS</h5>
                            <div className="full-css">
                                <p className="css-percent">70%</p>
                            </div>
                            <h5 className="java-name">JS</h5>
                            <div className="full-java">
                                <p className="java-percent">60%</p>
                            </div>
                            <h5 className="react-name">REACT</h5>
                            <div className="full-react">
                                <p className="react-percent">70%</p>
                            </div>
                        </div>
                    </div>
                    <div className="back-end">
                        <div className="original">
                            <h1>Back End</h1>
                            <img src={backend}></img>
                            <p>PYTHON C</p>
                        </div>
                        <div className="card-content">
                            <h5 className="python-name">PYTHON</h5>
                            <div className="full-python">
                                <p className="python-percent">85%</p>
                            </div>
                            <h5 className="c-name">C</h5>
                            <div className="full-c">
                                <p className="c-percent">80%</p>
                            </div>
                        </div>
                    </div>
                    <div className="sql">
                        <div className="original">
                            <h1>Database</h1>
                            <img src={sql}></img>
                            <p>SQL Tabels Redundancy</p>
                        </div>
                        <div className="card-content">
                            <h5 className="sql-name">SQL</h5>
                            <div className="full-sql">
                                <p className="sql-percent">50%</p>
                            </div>
                            <h5 className="tabels-name">Tabels</h5>
                            <div className="full-tabels">
                                <p className="tabels-percent">60%</p>
                            </div>
                            <h5 className="red-name">Redundancy</h5>
                            <div className="full-red">
                                <p className="red-percent">55%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-grid">
                    <h2 className="title">
                        <b>PROJECTS</b>
                    </h2>

                    <iframe
                        className="one-picture picture"
                        src="https://www.youtube.com/embed/TioQZWiNxh0"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <div className="one-text">
                        <h4>BFS Shortest Path Simulation - Python</h4>

                        <ul>
                            <li>
                                This is a Breadth First Search implementation of
                                Dijkstra's Algorithm in Python.
                            </li>
                            <li>
                                The user can draw borders on the grid that the
                                path will have to go around in order to go from
                                the green square to the red square.
                            </li>
                            <li>I used the PyGame Library to create the UI</li>
                            <li>This is a Queue based implementation </li>
                        </ul>
                    </div>
                    <img className="two-picture picture" src={chessCover}></img>
                    <div className="two-text">
                        <h4>Chess Neural Network - Python</h4>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <iframe
                        className="three-picture picture"
                        src="https://www.youtube.com/embed/9z-BrlxOUyE"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="true"
                    ></iframe>
                    <div className="three-text ">
                        <h4>Student Database - Python</h4>
                    </div>
                    <iframe
                        className="four-picture picture"
                        src="https://www.youtube.com/embed/06xCfRM8w-c"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="true"
                    ></iframe>
                    <div className="four-text">
                        <h4>League of Legends Match History - React</h4>
                    </div>
                    <iframe
                        className="five-picture picture"
                        src="https://www.youtube.com/embed/06xCfRM8w-c"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="true"
                    ></iframe>
                    <div className="five-text">
                        <h4>League of Legends Match History - React</h4>
                    </div>
                    <iframe
                        className="six-picture picture"
                        src="https://www.youtube.com/embed/06xCfRM8w-c"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="true"
                    ></iframe>
                    <div className="six-text">
                        <h4>League of Legends Match History - React</h4>
                    </div>
                </div>
                <form
                    className="contact"
                    action="https://formsubmit.co/mbrown2019@my.fit.edu"
                    method="POST"
                >
                    <h2 className="contact-title">
                        <b>CONTACT ME</b>
                    </h2>
                    <input className="contact-name" placeholder="Name"></input>
                    <input
                        className="contact-subject"
                        placeholder="Subject"
                    ></input>
                    <input
                        className="contact-email"
                        placeholder="Email"
                    ></input>
                    <textarea
                        className="contact-message"
                        placeholder="Enter message..."
                    ></textarea>
                    <button className="contact-submit">Send</button>
                </form>
                <footer className="footer">
                    <div className="phone">
                        <img src={phone}></img>
                        <p>843-340-4010</p>
                    </div>
                    <div className="email">
                        <img src={email}></img>
                        <p>mbrown2019@my.fit.edu</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
