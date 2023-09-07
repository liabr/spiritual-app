import React    from "react";
import template from "./UserProfile.jsx";

class UserProfile extends React.Component {
  render() {
    return template.call(this);
  }
}

export default UserProfile;
