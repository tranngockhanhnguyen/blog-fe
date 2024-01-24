import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div id='layoutSidenav_content'>
      <div className='container-fluid px-4'>
        <h1 className='mt-4'>Users</h1>
        <ol className='breadcrumb mb-4'>
          <li className='breadcrumb-item'>
            <Link to='/'>Dashboard</Link>
          </li>
          <li className='breadcrumb-item active'>Tables</li>
        </ol>
        <div className='card mb-4'>
          <div className='card-header'>
            <i className='fas fa-table me-1'></i>
            Users Table
          </div>
          <div className='card-body'>
            <div className='card-body'>
              <div className='row mb-3'>
                <div className='col-sm-12 col-md-6'>
                  <label className='d-inline-flex'>
                    Show
                    <select
                      name='example_length'
                      className='form-select form-select-sm ms-1 me-1'
                    >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='5'>5</option>
                      <option value='10'>10</option>
                    </select>
                    entries
                  </label>
                </div>
                <div className='col-sm-12 col-md-6'>
                  <label className='d-inline-flex float-end'>Search:</label>
                </div>
              </div>
              <table className='table' cellPadding='0' width='100%'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>First</th>
                    <th scope='col'>Last</th>
                    <th scope='col'>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td colSpan='2'>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
