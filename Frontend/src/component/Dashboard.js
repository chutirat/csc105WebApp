import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@material-ui/core";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Left from "./Left";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const Dashboard = () => {
  return (
    <div className="inventory">
      <Left />
      <div className="right" style={{ alignSelf: "center" }}>
        <div>
          <BarChart
            width={730}
            height={250}
            data={data}
            style={{ margin: "auto" }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>

          <Box maxWidth="500px" margin="auto">
            <Card>
              <CardHeader title="List" />
              <Divider />
              <CardContent>
                <Box display="flex" flexDirection="column">
                  <Typography color="textSecondary" align="left">
                    AAA
                  </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography>A</Typography>
                      <Typography>B</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
