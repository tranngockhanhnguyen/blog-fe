import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import requestApi from "../helpers/api";
import { setLoading } from "../store/reducer/loginSlice";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const promiseUser = requestApi("/user", "GET");
    const promisePost = requestApi("/post", "GET");
    dispatch(setLoading(true));
    Promise.all([promisePost, promiseUser])
      .then((res) => {
        setDashboard((prev) => ({
          ...prev,
          totalPost: res[0].data.total,
          totalUser: res[1].data.total,
        }));
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
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
              {dashboard.totalUser && (
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                  {dashboard.totalUser}
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
                {dashboard.totalPost && (
                  <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                    {dashboard.totalPost}
                    <span className='visually-hidden'>unread messages</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
