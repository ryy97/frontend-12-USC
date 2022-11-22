import React from "react";
import { DialogAuth } from "react-mui-auth-page";

const AuthPage = ({ open, setOpen }) => {
  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
  };
  const handleSignUp = ({ email, name, password }) => {
    console.log({ email, name, password });
  };
  const handleForget = ({ email }) => {
    console.log({ email });
  };

  return (
    <>
      <DialogAuth
        open={open}
        hideTabs
        logoComponent={
          <>
            <img
              src="https://assets.materialup.com/uploads/3ec8a09d-a55c-400d-8dad-827836b116de/preview.jpg"
              alt="Logo"
              height="120px"
            />
          </>
        }
        textFieldVariant="outlined"
        onClose={() => {}}
        handleSignUp={handleSignUp}
        handleForget={handleForget}
        handleSignIn={handleSignIn}
        handleSocial={{
          Linkedin: () => {},
          Github: () => {},
          Facebook: () => {},
          Google: () => {},
        }}
      />
    </>
  );
};

export default AuthPage;
