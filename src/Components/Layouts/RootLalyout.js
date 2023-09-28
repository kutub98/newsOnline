import { useState, useEffect } from "react";
import { Col, Layout, Menu, Row, theme, Drawer, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router"; // Import Next.js Router
import { MenuOutlined } from "@ant-design/icons"; // Import the MenuOutlined icon
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false); // State to control the visibility of the menu

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter(); // Initialize Next.js Router

  const [activeRoute, setActiveRoute] = useState(""); // State to track the active route

  const paths = [
    {
      page: "Home",
      route: "/",
    },
    {
      page: "About",
      route: "/about",
    },
    {
      page: "Contact",
      route: "/contact",
    },
    {
      page: "News",
      route: "/News",
    },
    {
      page: "Blog",
      route: "/News/Blog",
    },
    {
      page: "Article",
      route: "/News/Article",
    },
    {
      page: "Admin",
      route: "/Admin",
    },
    {
      page: "Dashboard",
      route: "/dashboard",
    },
  ];

  useEffect(() => {
    const handleRouteChange = (url) => {
      setActiveRoute(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Initialize activeRoute
    setActiveRoute(router.pathname);

    // Remove the listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          position: "sticky",
          top: "0",
          marginBottom: "10px",
          zIndex: "10",
        }}
      >
        <Row style={{ justifyContent: "space-between" }}>
          <Col lg={{ span: 6 }} md={{ span: 4 }} style={{ color: "white" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                margin: "0px 10px",
              }}
              href={"/"}
            >
              News-Online
            </Link>
          </Col>
          <Col
            className="hideColInMedim"
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            lg={{ span: 16 }}
            md={{ span: 0 }}
            style={{ color: "white", background: "red" }}
          >
            <Menu
              style={{
                display: "flex",
                textAlign: "right",
                color: "white",
                justifyContent: "space-between",
              }}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              onClick={() => setMenuVisible(false)} // Close the menu when a menu item is clicked
            >
              {paths.map((path, index) => (
                <Menu.Item
                  key={index + 1}
                  style={{
                    backgroundColor:
                      activeRoute === path.route ? "lightblue" : "transparent", // Change background color based on active route
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      margin: "0px 4px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    href={path.route}
                  >
                    {path.page}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Col>
          <Col
            className="hideButtonInLarge"
            lg={{ span: 0 }}
            md={{ span: 10 }}
            style={{ textAlign: "right" }}
          >
            {/* Show the menu icon (Drawer) on small and medium screens */}
            <Button
              type="text"
              onClick={toggleMenu}
              icon={<MenuOutlined />}
              style={{ color: "white" }}
            />
          </Col>
        </Row>
      </Header>

      {/* Use Drawer component for the responsive menu */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={() => setMenuVisible(false)}
        visible={menuVisible}
      >
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["2"]}
          onClick={() => setMenuVisible(false)}
        >
          {paths.map((path, index) => (
            <Menu.Item key={index + 1}>
              <Link href={path.route}>{path.page}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>

      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Copy rights reserved by:{" "}
        <Link href={"https://jmkutub1.web.app/"}>Kutub Uddin</Link>
      </Footer>
    </Layout>
  );
};
export default RootLayout;
