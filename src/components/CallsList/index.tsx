import React from "react";
import { useEffect } from "react";
import { List, Tabs, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Calls from "../Calls/index";
import "./index.scss";
import type { CallItem } from "../../data/interface/types";
import apiService from "../../instances/api";

interface CallListProps {
  onCallClick: (number: string) => void;
}

const CallsList: React.FC<CallListProps> = ({ onCallClick }) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [allData, setAllData] = React.useState<CallItem[]>([]);
  const [filteredData, setFilteredData] = React.useState<CallItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await apiService.get("/calls/recent-calls");
        console.log("API Response:", res.data); // Log the full response
        const result = Array.isArray(res.data)
          ? res.data
          : res.data?.recentCalls || res.data?.data || []; // Check if it's an array
        setAllData(result);
        setFilteredData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredResult = allData.filter(
      (item: CallItem) =>
        item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.destinationNumber.includes(searchQuery)
    );
    setFilteredData(filteredResult);
  }, [searchQuery, allData]);

  return (
    <div className="calls-list-wrapper">
      <p className="call-text-wrapper">Calls</p>
      <Tabs
        className="calls-tabs-wrapper"
        defaultActiveKey="1"
        onChange={() => setSearchQuery("")}
        items={[
          {
            key: "1",
            label: "All",

            children: (
              <div>
                <div className="searchBar">
                  <Input
                    placeholder="Search...."
                    prefix={<SearchOutlined />}
                    size="default"
                    style={{ marginBottom: 12 }}
                    onChange={handleChange}
                    value={searchQuery}
                  />
                </div>

                <div className="call-tab-list">
                  <List
                    itemLayout="horizontal"
                    loading={loading}
                    dataSource={filteredData}
                    renderItem={(item: CallItem) => (
                      <Calls call={item} onCallClick={onCallClick} />
                    )}
                  />
                </div>
              </div>
            ),
          },
          {
            key: "2",
            label: "Missed",
            children: (
              <div>
                <div className="searchBar">
                  <Input
                    placeholder="Search...."
                    prefix={<SearchOutlined />}
                    size="default"
                    style={{ marginBottom: 12 }}
                    onChange={handleChange}
                    value={searchQuery}
                  />
                  <div className="call-tab-list">
                    <List
                      itemLayout="horizontal"
                      loading={loading}
                      dataSource={filteredData.filter(
                        (item) => item.callStatus
                      )}
                      renderItem={(item: CallItem) => (
                        <Calls call={item} onCallClick={onCallClick} />
                      )}
                    />
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};
export default CallsList;
