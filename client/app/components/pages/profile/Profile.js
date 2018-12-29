import React, { Component } from "react";
import MainWrapper from "../../ui-elements/template/MainWrapper";
import { Breadcrumb } from "../../ui-elements/common-elements/CommonElements";
import { ProfileInfo, MyShops } from "./includes/CommonElements";

class Profile extends Component {
  render() {
    return (
      <MainWrapper>
        <Breadcrumb>
          <i urlTo="/Home" displayName="Home" />
          <i urlTo="/profile" displayName="Profile" />
        </Breadcrumb>

        <div className="row profileWrapper">
          <ProfileInfo />
          <MyShops />
        </div>
      </MainWrapper>
    );
  }
}

export default Profile;
