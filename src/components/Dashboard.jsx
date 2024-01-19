import { useEffect, useState } from "react";
import requestApi from "../helpers/api";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({});
  useEffect(() => {
    requestApi("/user", "GET").then((res) =>
      setDashboardData({ ...dashboardData, totalUsers: res.data.total })
    );
  }, []);

  return (
    <div id='layoutSidenav_content'>
      <div className='container-fluid px-4 '>
        <h1 className='mt-4'>Dashboard</h1>
        <ol className='breadcrumb mb-4'>
          <li className='breadcrumb-item active'>Dashboard</li>
        </ol>
        <div className='row'>
          <div className='col-xl-3 col-md-6'>
            <div className='card bg-primary text-white mb-4'>
              <div className='card-body'>User</div>
              <div className='card-footer d-flex align-items-center justify-content-between'>
                <a className='small text-white stretched-link' href='#'>
                  View Details
                </a>
                <div className='small text-white'>
                  <i className='fas fa-angle-right'></i>
                </div>
              </div>
              {dashboardData.totalUsers && (
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                  {dashboardData.totalUsers}
                  <span className='visually-hidden'>unread messages</span>
                </span>
              )}
            </div>
          </div>
          <div className='col-xl-3 col-md-6'>
            <div className='card bg-warning text-white mb-4'>
              <div className='card-body'>Warning Card</div>
              <div className='card-footer d-flex align-items-center justify-content-between'>
                <a className='small text-white stretched-link' href='#'>
                  View Details
                </a>
                <div className='small text-white'>
                  <i className='fas fa-angle-right'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6'>
            <div className='card bg-success text-white mb-4'>
              <div className='card-body'>Success Card</div>
              <div className='card-footer d-flex align-items-center justify-content-between'>
                <a className='small text-white stretched-link' href='#'>
                  View Details
                </a>
                <div className='small text-white'>
                  <i className='fas fa-angle-right'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6'>
            <div className='card bg-danger text-white mb-4'>
              <div className='card-body'>Danger Card</div>
              <div className='card-footer d-flex align-items-center justify-content-between'>
                <a className='small text-white stretched-link' href='#'>
                  View Details
                </a>
                <div className='small text-white'>
                  <i className='fas fa-angle-right'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
