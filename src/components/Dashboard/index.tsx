import React from "react";
import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";

import { DashboardContainer, DashboardContent } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardContent>
        <Summary />

        <TransactionsTable />
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
