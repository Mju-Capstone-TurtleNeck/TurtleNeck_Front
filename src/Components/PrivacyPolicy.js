import React, { Component } from "react";

class PrivacyPolicy extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>
          TurtleNeck 이용을 위해 수집한 귀하의 정보를 관리함에 있어서
          「개인정보보호법」에서 규정하고 있는 책임과 의무를 준수하고 제공자가
          동의한 내용 외 다른 목적으로는 활용하지 않음을 알려드립니다.
          <br />
          <br />
          - 개인정보 수집이용 목적 : 회원가입 및 본인인증, TurtleNeck 서비스
          제공 등<br />
          <br />
          - 개인정보 수집이용 목적 : 회원가입 및 본인인증, TurtleNeck 서비스
          제공 등<br />
          <br />
          - 수집하려는 개인정보 항목
          <br />
          <br />
          * 회원의 경우
          <br />
          - 필수 : 아이디, 비밀번호, 생년월일, 이메일, 주소
          <br />
          <br />
          - 선택 : 사용자 GPS
          <br />
          <br />
          - 개인정보 보유 및 이용기간 : 개인정보 및 초상권 수집, 이용목적이
          달성된 후에는 지체 없이 파기합니다. 개인정보 보유 및 이용기간은 회원
          탈퇴 시까지입니다.
          <br />
          <br />
          - 이용자는 TurtleNeck에서 수집하는 개인정보 제공에 대한 동의를 거부할
          권리가 있습니다. 다만, TurtleNeck 이용에 필요한 필수 항목의 제공에
          대한 동의를 거부하시면 위의 서비스가 제한될 수 있습니다.
          <br />
          <br />
        </p>
      </>
    );
  }
}

export default PrivacyPolicy;
