import { Layout } from "antd";
import Sidebar from "../../components/Sidebar";
import CallsLayout from "../callslayout/index";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const { Sider, Content } = Layout;

const Mainlayout: React.FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("access_token"));

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={80} style={{ background: "#1677ff" }}>
        <Sidebar />
      </Sider>
      <Layout>
        <Content style={{ display: "flex" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;
