import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

const Dashboard1 = () => {
  return (
    <StyledDashboard>
      <SideNav>
        <h3>List</h3>

        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/profile/profile"
        >
          <FaUserEdit /> My profile
        </NavLink>
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
  );
};

export default Dashboard1;

const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 700;

    svg {
      margin-right: 0.5rem;
      font-size: 18px;
    }
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;
