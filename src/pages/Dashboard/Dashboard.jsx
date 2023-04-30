import api from "api";
import React, {useEffect, useState} from "react";
import "./style.css";
import TrendingUserSection from "components/sections/TrendingUserSection/TrendingUserSection";
import TopRepositoriesSection from "components/sections/TopRepositoriesSection/TopRepositoriesSection";
import ActiveUserSection from "components/sections/ActiveUserSection/ActiveUserSection";

function Dashboard() {
  const [data, setData] = useState({
    topUsers: null,
    topRepositories: null,
    activeUser: null
  });

  useEffect(() => {
    async function fetchData() {
      const topUsers = await api.user.findAllByFollowers();
      const activeUser = await api.user.findAllByRepositories();
      const topRepositories = await api.repository.findAllByStars();
      setData({topUsers, topRepositories, activeUser})
    }

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      {data.topUsers && <TrendingUserSection value={data.topUsers}/>}
      {data.activeUser && <ActiveUserSection value={data.activeUser}/>}
      {data.topRepositories && <TopRepositoriesSection value={data.topRepositories}/>}
    </div>
  );
}

export default Dashboard;