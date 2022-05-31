import "../CSS/App.css";
import "../CSS/media.css";
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
                <div className="whitespace title">Matthew Brown</div>
                <div className="container-box hover top">Home</div>
                <div className="container-box hover about">About</div>
                <div className="container-box hover project">Projects</div>
                <div className="container-box hover whitespace contactMe">
                    Contact Me
                </div>

                <a href="https://github.com/mfbrown2019?tab=repositories">
                    <img src={github} height="50"></img>
                </a>

                <a href="https://www.linkedin.com/in/matthew-brown-3b73b9207/?trk=public-profile-join-page">
                    <img src={linkedin} height="50"></img>
                </a>
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
                        <div className="paragraph">
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
                    </div>
                    <div className="back-end">
                        <div className="original">
                            <h1>Back End</h1>
                            <img src={backend}></img>
                            <p>PYTHON C</p>
                        </div>
                    </div>
                    <div className="sql">
                        <div className="original">
                            <h1>Database</h1>
                            <img src={sql}></img>
                            <p>SQL Tabels Redundancy</p>
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
                            <li>
                                Dense Neural Network used to try and predict who
                                is currently winning a game of chess.
                            </li>
                            <li>
                                This project uses tensorflow and thousands of
                                data points of information for training
                            </li>
                            <li>
                                For training positions we took chess puzzles
                                represented as a FEN string. Example -
                                3r2k1/2pqnpp1/1p5p/p2P4/P2p1rP1/2P1N1P1/1PQ2P2/3RR1K1
                                b - - 0 23
                            </li>
                            <li>
                                We trained many different models with LeNetReg
                                ending up being the best model after many
                                iterations of training
                            </li>
                            <li>
                                Each iteration of training we changed a
                                hyperparameter including epoch, l1, l2, dropout,
                                activation function, and alpha
                            </li>
                            <li>The final model got an accuracy of 95%</li>
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
                        <ul>
                            <li>
                                This was my final project for a Python Class In
                                School
                            </li>
                            <li>
                                The goal was to create a student database that a
                                user could add, search, display student data
                            </li>
                            <li>
                                Each Student recieved a unique ID number and the
                                first 20 students have photos related that
                                display when searched
                            </li>
                            <li>
                                The database is written in SQLite and is used
                                for fitering data when users search for certain
                                information{" "}
                            </li>
                        </ul>
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
                        <ul>
                            <li>
                                This Applicaiton was written with React and
                                shows off the use of using and displaying
                                information from an api
                            </li>
                            <li>
                                Riot Games offers a free API to search for
                                information about players over most of their
                                games which I used to display a players last x
                                amount of matches
                            </li>
                            <li>
                                This application will display all players in the
                                game, team that won, each players items they
                                purchased throughout the game, the character
                                they played, and their role in the game
                            </li>
                        </ul>
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
                    action="https://formsubmit.co/cacca112da3fff882c1fcdffe3ad0e2c"
                    method="POST"
                >
                    <h2 className="contact-title">
                        <b>CONTACT ME</b>
                    </h2>
                    <input
                        type="text"
                        name="_honey"
                        style={{ display: "none" }}
                    ></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input
                        type="hidden"
                        name="_next"
                        value="https://mfbrown2019.github.io/Portfolio/"
                    />
                    <input
                        className="contact-name"
                        placeholder="Name"
                        name="Name"
                    ></input>
                    <input
                        className="contact-subject"
                        placeholder="Subject"
                        name="Subject"
                    ></input>
                    <input
                        className="contact-email"
                        placeholder="Email"
                        name="Email"
                    ></input>
                    <textarea
                        className="contact-message"
                        placeholder="Enter message..."
                        name="Message"
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
                    <a
                        className="github"
                        href="https://github.com/mfbrown2019?tab=repositories"
                    >
                        <img src={github} height="50"></img>
                    </a>

                    <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/matthew-brown-3b73b9207/?trk=public-profile-join-page"
                    >
                        <img src={linkedin} height="50"></img>
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default App;
