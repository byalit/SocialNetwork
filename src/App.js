import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/music";
import News from "./components/News/news";
import Photo from "./components/Photo/photo";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./components/redux/appReducer";
import Preloader from "./components/common/preloader/preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
      if (!this.props.initialized) {
          return <Preloader/>
      }
          return (
              <>
                  <div className="app-wrapper">
                      <HeaderContainer/>
                      <Navbar/>

                      <div className="app-wrapper-content">
                          <Routes>
                              <Route
                                  path="/dialogs/*"
                                  element={<DialogsContainer/>}
                              />
                              <Route path="/profile" element={<ProfileContainer/>}>
                                  <Route path=":userId" element={<ProfileContainer/>}/>
                              </Route>
                              <Route
                                  path="/users"
                                  element={
                                      <UsersContainer/>
                                  }
                              />
                              <Route path="/login" element={<LoginPage/>}/>
                              <Route path="/music" element={<Music/>}/>
                              <Route path="/news" element={<News/>}/>
                              <Route path="/photo" element={<Photo/>}/>
                          </Routes>
                      </div>
                  </div>
              </>
          );
      }

}
const mapStateToProps=(state)=>({
    initialized: state.app.initialized
})
export default
    connect(mapStateToProps,{initializeApp}) (App);
