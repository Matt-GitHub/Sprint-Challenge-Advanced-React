import React from "react";
import Axios from "axios";
import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      worldcupData: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({ worldcupData: response.data });

        console.log("response", response.data);
      })
      .catch(
        error => {
          console.log("error", error);
        },
        [1]
      );
  }
  render() {
    return (
      <div className="card">
        {this.state.worldcupData.map(info => {
          return (
            <div className="flex" key={info.id}>
              <h2 data-testid="check" className="name">
                {info.name}
              </h2>
              <h3 className="country">{info.country}</h3>
              <h4 className="searches">Searches: {info.searches}</h4>
            </div>
          );
        })}
        <BarChart
          width={1600}
          height={800}
          data={this.state.worldcupData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="10 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="searches" fill="#8884d8" barSize={10} />
          <Brush dataKey="name" startIndex={0} endIndex={7} />
        </BarChart>
      </div>
    );
  }
}

export default Data;
