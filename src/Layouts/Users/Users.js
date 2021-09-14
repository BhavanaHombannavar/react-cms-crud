import React from 'react';
import './Users.css';

function Users () {
  return (
    <div className="container">
      <div className="card">
      <div className="table-responsive">
          <table className="table table-striped table-hover">
              <thead>
                  <tr>
                      <th className="text-center">#</th>
                      <th>Name</th>
                      <th>Job Position</th>
                      <th>Since</th>
                      <th className="text-right">Salary</th>
                      <th className="text-right">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-center">1</td>
                      <td>Andrew Mike</td>
                      <td>Develop</td>
                      <td>2013</td>
                      <td className="text-right">€ 99,225</td>
                      <td className="td-actions text-right">
                          <button type="button" rel="tooltip" className="btn btn-info btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-eye"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-pencil"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-times"></i>
                          </button>
                      </td>
                  </tr>
                  <tr>

                      <td className="text-center">2</td>
                      <td>John Doe</td>
                      <td>Design</td>
                      <td>2012</td>
                      <td className="text-right">€ 89,241</td>
                      <td className="td-actions text-right">
                          <button type="button" rel="tooltip" className="btn btn-info btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-eye"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-pencil"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-times"></i>
                          </button>
                      </td>
                  </tr>
                  <tr>
                      <td className="text-center">3</td>
                      <td>Alex Mike</td>
                      <td>Design</td>
                      <td>2010</td>
                      <td className="text-right">€ 92,144</td>
                      <td className="td-actions text-right">
                          <button type="button" rel="tooltip" className="btn btn-info btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-eye"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-pencil"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-times"></i>
                          </button>
                      </td>
                  </tr>
                  <tr>
                      <td className="text-center">4</td>
                      <td>Mike Monday</td>
                      <td>Marketing</td>
                      <td>2013</td>
                      <td className="text-right">€ 49,990</td>
                      <td className="td-actions text-right">
                          <button type="button" rel="tooltip" className="btn btn-info btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-eye"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-pencil"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-times"></i>
                          </button>
                      </td>
                  </tr>
                  <tr>
                      <td className="text-center">5</td>
                      <td>Paul Dickens</td>
                      <td>Communication</td>
                      <td>2015</td>
                      <td className="text-right">€ 69,201</td>
                      <td className="td-actions text-right">
                          <button type="button" rel="tooltip" className="btn btn-info btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-eye"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-pencil"></i>
                          </button>
                          <button type="button" rel="tooltip" className="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
                              <i className="fa fa-times"></i>
                          </button>
                      </td>
                  </tr>
              </tbody>
          </table>
          </div></div>
    </div>
  );
}

export default Users;
