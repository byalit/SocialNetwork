import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, Navigate} from "react-router-dom";
import Music from "./components/Music/music";
import News from "./components/News/news";
import Photo from "./components/Photo/photo";
import React, {Suspense, lazy} from "react";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./components/redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
const DialogsContainer = lazy(()=>import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = lazy(()=>import("./components/Profile/ProfileContainer"))


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
                          <Suspense fallback={<Preloader />}>

                          <Routes>
                              <Route path="/" element={<Navigate to="/profile" />} />
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
                              <Route path="*" element={<div>404 not found</div>}/>
                          </Routes>
                          </Suspense>
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
