import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Muestra de proyectos:</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">RubiksCubeTesisIA_V</h1>
          <h3 className="position">PYTHON</h3>
          <h4 className="about">
          Improvement of the program to solve a 3x3 rubick cube
          through artificial intelligence with python,
          purpose: Thesis on the application of artificial
          intelligence for the automation of activities.
          </h4>
          <a href="https://github.com/GOLFISHMANALEXIS/RubiksCubeTesisIA_V" className="contact-member">
            <span>Ver mas</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Gesture-Controlled-Virtual-Mouse</h1>
          <h3 className="position">PYTHON</h3>
          <h4 className="about">
          Virtually controlling computer using 
          hand-gestures and voice commands. 
          Using MediaPipe, OpenCV Python.
          </h4>
          <a href="https://github.com/GOLFISHMANALEXIS/Gesture-Controlled-Virtual-Mouse" className="contact-member">
            <span>Ver mas</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Chat-Kary</h1>
          <h3 className="position">REACT</h3>
          <h4 className="about">
          CHAT_APP for my bride Karyme 
          using react and firebase with 
          implementation in netlify.
          </h4>
          <a href="https://github.com/GOLFISHMANALEXIS/Chat-Kary" className="contact-member">
            <span>Ver mas</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
