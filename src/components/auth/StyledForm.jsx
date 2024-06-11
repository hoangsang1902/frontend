// import styled from "styled-components";

// export const StyledForm = styled.form`
//   max-width: 350px;
//   width: 100%;
//   margin: 2rem auto;

//   h2 {
//     margin-bottom: 1rem;
//   }

//   button,
//   input {
//     height: 35px;
//     width: 100%;
//     padding: 7px;
//     outline: none;
//     border-radius: 5px;
//     border: 1px solid rgb(220, 220, 220);
//     margin-bottom: 1rem;

//     &:focus {
//       border: 1px solid rgb(0, 208, 255);
//     }
//   }

//   button {
//     cursor: pointer;

//     &:focus {
//       border: none;
//     }
//   }

//   p {
//     font-size: 14px;
//     color: red;
//   }
// `;

// import styled from "styled-components";

// export const StyledForm = styled.form`
//   max-width: 400px;
//   width: 100%;
//   margin: 2rem auto;
//   padding: 2rem;
//   background-color: #3b3f45;
//   border-radius: 10px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   color: #fff;

//   h2 {
//     margin-bottom: 1.5rem;
//     color: #61dafb;
//     text-align: center;
//   }

//   .input-group {
//     margin-bottom: 1rem;

//     label {
//       display: block;
//       margin-bottom: 0.5rem;
//       font-weight: bold;
//     }

//     input {
//       height: 40px;
//       width: 100%;
//       padding: 0 10px;
//       border: 1px solid #666;
//       border-radius: 5px;
//       background-color: #555;
//       color: #fff;
//       outline: none;
//       transition: border-color 0.3s;

//       &:focus {
//         border-color: #61dafb;
//       }
//     }
//   }

//   .checkbox-group {
//     margin-bottom: 1rem;

//     input {
//       margin-right: 0.5rem;
//     }
//   }

//   button {
//     height: 40px;
//     width: 100%;
//     padding: 0 10px;
//     border: none;
//     border-radius: 5px;
//     background-color: #61dafb;
//     color: #282c34;
//     font-weight: bold;
//     cursor: pointer;
//     transition: background-color 0.3s;
//     margin-bottom: 1rem;

//     &:hover {
//       background-color: #21a1f1;
//     }

//     &:focus {
//       outline: none;
//     }
//   }

//   .forgot-password,
//   .register-link {
//     display: block;
//     margin-top: 1rem;
//     text-align: center;
//     color: #61dafb;
//     text-decoration: none;
//     transition: color 0.3s;

//     &:hover {
//       color: #21a1f1;
//     }
//   }

//   .already-have-account {
//     display: block;
//     margin-top: 1rem;
//     text-align: center;
//     color: #61dafb;
//     text-decoration: none;
//     transition: color 0.3s;

//     &:hover {
//       color: #21a1f1;
//     }
//   }

//   p {
//     font-size: 14px;
//     color: red;
//     text-align: center;
//   }
// `;

import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #3b3f45;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #fff;

  h2 {
    margin-bottom: 1.5rem;
    color: #61dafb;
    text-align: center;
  }

  .input-group {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    label {
      font-weight: bold;
      padding: 0; /* Remove padding to align with left edge */
      margin-right: 10px; /* Add some space between label and input */
      min-width: 80px; /* Set a minimum width for labels */
    }

    input {
      height: 40px;
      flex: 1; /* Allow input to take up remaining space */
      padding: 0 10px;
      border: 1px solid #666;
      border-radius: 5px;
      background-color: #555;
      color: #fff;
      outline: none;
      transition: border-color 0.3s;

      &:focus {
        border-color: #61dafb;
      }
    }
  }

  .checkbox-group {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    input {
      margin-right: 0.5rem;
    }
  }

  button {
    height: 40px;
    width: 100%; /* Ensure button width is 100% */
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #61dafb;
    color: #282c34;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 1rem;

    &:hover {
      background-color: #21a1f1;
    }

    &:focus {
      outline: none;
    }
  }

  .forgot-password,
  .register-link {
    display: block;
    margin-top: 1rem;
    text-align: center;
    color: #61dafb;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #21a1f1;
    }
  }

  .already-have-account {
    display: block;
    margin-top: 1rem;
    text-align: center;
    color: #61dafb;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #21a1f1;
    }
  }

  p {
    font-size: 14px;
    color: red;
    text-align: center;
  }
`;
