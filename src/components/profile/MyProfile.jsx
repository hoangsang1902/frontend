import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { setHeaders, url } from "../../slices/api";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const MyProfile = () => {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const [profileData, setProfileData] = useState({
    name: user.name || "",
    email: user.email || "",
    isAdmin: user.isAdmin || false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);

  useEffect(() => {
    setProfileData({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }, [user]);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setUpdatingProfile(true);

    try {
      const res = await axios.put(
        `${url}/users/${user._id}`,
        { ...profileData },
        setHeaders()
      );
      setProfileData({ ...res.data });
      toast.success("Profile updated...");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile...");
    } finally {
      setUpdatingProfile(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setUpdatingPassword(true);

    try {
      await axios.put(
        `${url}/passwordchange/${user._id}/password`,
        { ...passwordData },
        setHeaders()
      );
      setPasswordData({ currentPassword: "", newPassword: "" });
      toast.success("Password updated...");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update password...");
    } finally {
      setUpdatingPassword(false);
    }
  };

  return (
    <StyledProfile>
      <ProfileContainer>
        <FormContainer>
          <form onSubmit={handleProfileSubmit}>
            <h3>User Profile</h3>
            <div>
              {profileData.isAdmin ? (
                <Admin>Admin</Admin>
              ) : (
                <Customer>Customer</Customer>
              )}
            </div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={profileData.email}
              // onChange={(e) =>
              //     setProfileData({ ...profileData, email: e.target.value })
              // }
              readOnly
            />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
            />
            <button type="submit">
              {updatingProfile ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </FormContainer>
        <Divider />
        <FormContainer>
          <form onSubmit={handlePasswordSubmit}>
            <h3>Change Password</h3>
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              value={passwordData.currentPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  currentPassword: e.target.value,
                })
              }
            />
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  newPassword: e.target.value,
                })
              }
            />
            <button type="submit">
              {updatingPassword ? "Updating..." : "Update Password"}
            </button>
          </form>
        </FormContainer>
      </ProfileContainer>
    </StyledProfile>
  );
};
export default MyProfile;

const StyledProfile = styled.div`
  margin: 0.7rem;
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: auto;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  padding: 2rem;
  background: #ffffff;
`;

const Divider = styled.div`
  width: 2px;
  background-color: #ddd;
  margin: 0 1rem;
`;

const FormContainer = styled.div`
  flex: 1;
  margin: 1rem 2rem;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      margin-bottom: 1rem;
      color: #333;
      font-size: 1.5rem;
      font-weight: bold;
    }
    label {
      margin-bottom: 0.5rem;
      color: #666;
      font-weight: 500;
    }
    input {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.5rem;
      outline: none;
      border: 1px solid #ddd;
      border-radius: 5px;
      transition: border-color 0.3s;
      &:focus {
        border-color: #007bff;
      }
    }
    button {
      /* align-self: flex-end; */
      align-self: center;
      padding: 0.5rem 1.5rem;
      color: #fff;
      background-color: rgb(35, 86, 116);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
        background-color: rgb(35, 86, 116);
      }
    }
  }
`;

const Admin = styled.div`
  color: #fdb528;
  background: rgba(253, 181, 40, 0.12);
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 14px;
  margin-bottom: 1rem;
`;

const Customer = styled.div`
  color: #26c6f9;
  background-color: rgba(38, 198, 249, 0.12);
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 14px;
  margin-bottom: 1rem;
`;
