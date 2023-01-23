import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
//components
import Header from "./layouts/Header/Header";

//pages
import Home from "./pages/Home";
import Paths from "./pages/Paths";

import Profile from "./pages/Profile";
import Account from "./components/profile/tabs/Account";
import History from "./components/profile/tabs/History";
import LikedVideos from "./components/profile/tabs/LikedVideos";

import VideoPlayer from "./pages/VideoPlayer";

import LogIn from "./pages/auth/logIn/LogIn";
import Password_Forgot from "./pages/auth/logIn/password_forgot/Password_Forgot";
import Password_Reset from "./pages/auth/logIn/password_reset/Password_Reset";

import SignUp from "./pages/auth/register/SignUp";

// Admin
import AdminLogin from "./pages/auth/adminLogin/AdminLogin";
import Admin from "./pages/admin/Admin";

import AddPlaylist from "./components/admin/tabs/AddPlaylist";
import AddVideo from "./components/admin/tabs/AddVideo";
import AddUser from "./components/admin/tabs/AddUser";
import AddPath from "./components/admin/tabs/AddPath";

import Utilities from "./components/helper/Utilities";
import Error from "./pages/Error";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
// import ExistingVideos from "./pages/admin/ExistingVideos";
import SinglePlaylist from "./pages/SinglePlaylist";
import Search from "./pages/Search";
import EditVideoModal from "./components/admin/EditVideoModal";
import EditPlaylistModal from "./components/admin/EditPlaylistModal";
import VideosOnPlaylist from "./pages/admin/VideosOnPlaylist";
import EditPathModal from "./components/admin/EditPathModal";
import PlaylistOnPath from "./pages/admin/PlaylistsOnPath";
import ExistingVideo from "./components/admin/ExistingVideo";
import ExistingPlaylists from "./components/admin/ExistingPlaylists";
import PaymentHistory from "./components/admin/userProfile/tabs/PaymentHistory";
import UserAccount from "./components/admin/userProfile/tabs/UserAccount";
import UserInAdmin from "./pages/UserInAdmin";

function App() {
  return (
    <>
      <ToastContainer position={"top-right"} />
      <Utilities />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRouteAdmin>
              <Admin />
            </PrivateRouteAdmin>
          }
        >
          <Route
            path="/admin/dashboard/playlist"
            element={
              <PrivateRouteAdmin>
                <AddPlaylist />
              </PrivateRouteAdmin>
            }
          />

          <Route
            path="/admin/dashboard/video"
            element={
              <PrivateRouteAdmin>
                <AddVideo />
              </PrivateRouteAdmin>
            }
          />
          <Route
            path="/admin/dashboard/video/edit/:id"
            element={
              <PrivateRouteAdmin>
                <EditVideoModal />
              </PrivateRouteAdmin>
            }
          />
          <Route
            path="/admin/dashboard/playlist/edit/:id"
            element={
              <PrivateRouteAdmin>
                <EditPlaylistModal />
              </PrivateRouteAdmin>
            }
          />
          <Route
            path="/admin/dashboard/user"
            element={
              <PrivateRouteAdmin>
                <AddUser />
              </PrivateRouteAdmin>
            }
          />
          {/* <Route
            path="/admin/dashboard/user/:id"
            element={
              <PrivateRouteAdmin>
                <UserAccount/>
              </PrivateRouteAdmin>
            }
          /> */}
          {/* <Route
            path="/admin/dashboard/user/paymentHistory"
            element={
              <PrivateRouteAdmin>
                <PaymentHistory/>
              </PrivateRouteAdmin>
            }
          /> */}

          <Route
            path="/admin/dashboard/user/register"
            element={
              <PrivateRouteAdmin>
                <SignUp />
              </PrivateRouteAdmin>
            }
          />
          <Route
            path="/admin/dashboard/path"
            element={
              <PrivateRouteAdmin>
                <AddPath />
              </PrivateRouteAdmin>
            }
          />

          <Route
            path="/admin/dashboard/path/edit/:id"
            element={
              <PrivateRouteAdmin>
                <EditPathModal />
              </PrivateRouteAdmin>
            }
          />
        </Route>
        <Route
          path="/admin/dashboard/playlist/:id"
          element={
            <PrivateRouteAdmin>
              <VideosOnPlaylist />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/admin/dashboard/playlist/:id/existingVideo"
          element={
            <PrivateRouteAdmin>
              <ExistingVideo />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/admin/dashboard/path/:id/existingPlaylists"
          element={
            <PrivateRouteAdmin>
              <ExistingPlaylists />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/admin/dashboard/path/:id"
          element={
            <PrivateRouteAdmin>
              <PlaylistOnPath />
            </PrivateRouteAdmin>
          }
        />

        <Route
          path="/paths"
          element={
            <PrivateRoute>
              <Paths />
            </PrivateRoute>
          }
        />
        <Route path="/userInAdmin" element={<UserInAdmin />}>
          <Route path="/userInAdmin/user/:id" element={<UserAccount />} />
          <Route
            path="/userInAdmin/paymentHistory"
            element={<PaymentHistory />}
          />
        </Route>

        <Route path="/login" element={<LogIn />} />
        <Route path="/activate" element={<LogIn />} />
        {/* <Route path="/register" element={<SignUp />} /> */}

        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/account/:id" element={<Account />} />
          <Route path="/profile/history" element={<History />} />
          <Route path="/profile/likedvideos" element={<LikedVideos />} />
        </Route>

        <Route path="/singlePlaylist/:id" element={<SinglePlaylist />} />

        <Route path="/videoPlayer/:id" element={<VideoPlayer />} />
        <Route path="/password_forgot" element={<Password_Forgot />} />
        <Route path="/reset-password" element={<Password_Reset />} />

        <Route path="/search" element={<Search />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
