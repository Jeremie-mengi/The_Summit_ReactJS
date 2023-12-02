import {NavLink} from "react-router-dom";
function Navigation () {
    return(
<>
  <div className="navigation">
    <ul>
    <NavLink to="/Lodge" className="nav-link">The Lodge</NavLink>
    <NavLink to="/Our" className="nav-link">Our Ski Runs</NavLink>
    <NavLink to="/TheSumm" className="nav-link">The Summit</NavLink>
    <NavLink to="/How" className="nav-link">How to Get Here</NavLink>
    <NavLink to="/Contact" className="nav-link">Contact</NavLink>
    </ul>
  </div>


<div className="banner">
   <div className="banner-text">
     <h1>Experience</h1>
     <h2>The Summit</h2>
     <button id="jm"><NavLink  to="/How" className="btn">Get on the mountain</NavLink></button>
   </div>
   </div>


  <div className="content">
    <h2>The Experience</h2>
    <div className="description">
      <p>The Summit is the geographical center of the the <NavLink to="http://www.gobreck.com/">Breckenridge</NavLink> Ski Area.
        It also has the widest variety of terrain, from beginner trails to steep bowl terrain. Lower Peak 8 consists of
        beginner trails, as well as many intermediate trails mixed with some advanced runs. There are four lifts out of
        the base area: Lift 7, which services a beginner learning area; Lift 5, which services more advanced beginner
        terrain, the Freeway and Park Lane Terrain Parks, and the Alpine Slide. At the north end of the base area, the
        Colorado SuperChair provides access to the Vista Haus, central Peak 8, as well as access to the Peak 8 back
        bowls and Peak 9, while the Rocky Mountain SuperChair provides access to northern Peak 8, the T-Bar, Peak 7, and
        Peak 6.</p>
      <p>In 2007, The Summit hosted the first Winter RadAir It was one of the first action sports tours for winter
        sports. The Summit continues to host the event annually in the 2nd or 3rd weekend in December each year. Many of
        the top athletes in action sports from around the world continue to participate in the RadAir Tour. The Summit
        Pro Team usually constitutes many of the athletes each year, and are jointed by other participants such as Shaun
        Black, Hannah Stabile, Tanner Foyer, Andreas Baald, Gretchen LeBlay, Simon Duvallee, Sarah Blue, Tom Florisch,
        and Travis <NavLink
          to ="https://www.google.com/search?q=rigatoni&rlz=1C5CHFA_enUS751US751&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj5qu257ZvYAhVp3IMKHfkHDyUQ_AUICigB&biw=948&bih=1103">Rigatoni.</NavLink>
      </p>
    </div>
  </div>


  <div className="activities-panel">
    <h2>The Activities</h2>
    <NavLink to = "/How" id="a1" className="activity">
      Skiing
    </NavLink>
    <NavLink to = "/How" id="a2" 
 className="activity">
      Snowboarding
    </NavLink>
    <NavLink to = "/How" id="a3" className="activity">
      Shoeing
    </NavLink>
    <NavLink to = "/TheSumm" id="a4" className="activity">
      Dogsledding
    </NavLink>
    <NavLink to = "/Our" id="a5" className="activity">
      Tubing
    </NavLink>
    <NavLink to = "/TheSummw" id="a6" className="activity">
      Sledding
    </NavLink>
  </div>

  <div className="footer">
    <h2>1098 Breckenridge Way, Breckenridge, CO 78901</h2>
  </div>
   </>
    )  
}
export default Navigation;