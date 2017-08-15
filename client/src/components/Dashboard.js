import React                    from 'react';
import { Link }                 from 'react-router-dom';

import SurveyList               from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <h4 className="text-center mt-3">Surveys Dashboard</h4>

      <SurveyList />

      <div className="float-right">
        <Link to="/surveys/new" className="btn btn-large btn-primary">
          <i className="">+</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;
