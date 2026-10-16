import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { analyticsOverview } from '../data/portfolioData';

const pieColors = ['#00E5FF', '#8B5CF6', '#FFB547', '#A8B0C5'];

export default function AnalyticsDashboard() {
  return (
    <div className="analytics-shell panel-surface">
      <div className="kpi-row">
        {analyticsOverview.kpis.map((item) => (
          <div key={item.label} className="kpi-card">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.detail}</span>
          </div>
        ))}
      </div>

      <div className="chart-grid">
        <div className="chart-panel">
          <div className="chart-header">
            <h3>Monthly activity</h3>
            <span>Illustrative sample data</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={analyticsOverview.barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2c3555" />
              <XAxis dataKey="month" stroke="#A8B0C5" />
              <YAxis stroke="#A8B0C5" />
              <Tooltip />
              <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#00E5FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-panel">
          <div className="chart-header">
            <h3>Trend signal</h3>
            <span>Sample trend</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={analyticsOverview.lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2c3555" />
              <XAxis dataKey="label" stroke="#A8B0C5" />
              <YAxis stroke="#A8B0C5" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="lower-grid">
        <div className="chart-panel">
          <div className="chart-header">
            <h3>Category mix</h3>
            <span>Channel breakdown</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={analyticsOverview.pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={78} paddingAngle={4} dataKey="value">
                {analyticsOverview.pieData.map((entry, index) => (
                  <Cell key={`${entry.name}-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="insight-panel">
          <div className="chart-header">
            <h3>Analytical notes</h3>
            <span>Illustrative insights</span>
          </div>
          <ul>
            {analyticsOverview.insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
