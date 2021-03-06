import { Menu } from "antd";
import React from "react";
import MenuStyleDiv from "./styled";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

const MenuHome = () => {
  const history = useHistory();
  return (
    <MenuStyleDiv
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <div className={"Menu-title-home"}>
        <span className={"Menu-title-home"}>
          <img
            src={require("../../assets/side/logo-github.png").default}
            style={{
              width: "35px",
              height: "35px",
            }}
            alt={"github"}
          />
          <span className={"Menu-title-home-font"}>particlec</span>
        </span>
      </div>

      <SubMenu
        key="sub1"
        title={
          <span className={"Menu-title"}>
            <img
              src={require("../../assets/side/home.png").default}
              style={{
                width: "14px",
                height: "14px",
              }}
              alt={"home"}
            />
            <span style={{ marginLeft: "8px" }}>Dashboard</span>
          </span>
        }
      >
        <Menu.Item
          key="3"
          onClick={() => {
            history.push("/DashBoard");
          }}
        >
          Option 3
        </Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span className={"Menu-title"}>
            <img
              src={require("../../assets/side/information.png").default}
              style={{
                width: "14px",
                height: "14px",
              }}
              alt={"information"}
            />
            <span style={{ marginLeft: "8px" }}>Components</span>
          </span>
        }
      >
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub4"
        title={
          <span className={"Menu-title"}>
            <img
              src={require("../../assets/side/order.png").default}
              style={{
                width: "15px",
                height: "15px",
              }}
              alt={"order"}
            />
            <span style={{ marginLeft: "8px" }}>Examine your</span>
          </span>
        }
      >
        <Menu.ItemGroup key="g0" title="four-ot">
          <Menu.Item key="4">sports 1</Menu.Item>
          <Menu.Item key="5">learn 1</Menu.Item>
          <Menu.Item key="6">lianzi 0.2</Menu.Item>
          <Menu.Item key="7"> liandazi 0.3</Menu.Item>
          <Menu.Item key="8"> codebianxie</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g1" title="week Independent event">
          <Menu.Item key="1">Dot nevus follow-up</Menu.Item>
          <Menu.Item key="2">Develop a color interface</Menu.Item>
          <Menu.Item key="3">chatting software</Menu.Item>
          <Menu.Item key="4">Activate credit card</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g2" title="Delay and importance">
          <Menu.Item key="1">Try about</Menu.Item>
          <Menu.Item key="2">Professional learning</Menu.Item>
          <Menu.Item key="3">Dot nevus follow-up</Menu.Item>
          <Menu.Item key="4">Currency sales</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g3" title="Long term impact">
          <Menu.Item key="1">Micro movement</Menu.Item>
          <Menu.Item key="2">Dietary problems</Menu.Item>
          <Menu.Item key="3">Fund flow management</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g4" title="rare">
          <Menu.Item key="1">Philosophical learning</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g5" title="Illusory and great">
          <Menu.Item key="1">transaction soft</Menu.Item>
          <Menu.Item key="2">retire40</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g6" title="Amateur level">
          <Menu.Item key="1">Typing training</Menu.Item>
          <Menu.Item key="2">practise calligraphy</Menu.Item>
          <Menu.Item key="3">Micro Read</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g7" title="Owned and ignored">
          <Menu.Item key="1">family affection</Menu.Item>
          <Menu.Item key="2">Young body</Menu.Item>
          <Menu.Item key="3">healthy</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g8" title="information">
          make best use of the advantages and bypass the disadvantages
        </Menu.ItemGroup>
      </SubMenu>
    </MenuStyleDiv>
  );
};
export default MenuHome;
