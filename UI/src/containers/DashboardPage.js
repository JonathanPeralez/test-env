import React from 'react';
import {blue600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/book';
import Bug from 'material-ui/svg-icons/action/bug-report';
import InfoBox from '../components/dashboard/InfoBox';
import QuickAccess from '../components/dashboard/QuickAccess';
import ExtraSpace from '../components/dashboard/ExtraSpace';
import Pies from '../components/dashboard/Pies';
import PastQuery from '../components/dashboard/PastQuery';
import globalStyles from '../styles';
import Data from '../data';
import Build from 'material-ui/svg-icons/action/build';
import Star from 'material-ui/svg-icons/action/stars';
// import FormPage from './FormPage';


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: 0, queryResponse: ''};
    this.onClick = this.handleClick.bind(this);
  }

handleClick(event) {
  // const {id} = event.target;
  this.setState({
    queryResponse: "RESULTS OF QUERY",
    id: 1,
  });
}

render() {
  return (
    <div id={this.state.id} onClick={this.onClick}>
      <h3 style={globalStyles.navigation}>Dashboard</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Build}
                   color={blue600}
                   title="Construct a Query"
                   value=""
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
                   color={blue600}
                   title="Apollo Client Docs"
                   value=""
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Star}
                   color={blue600}
                   title="Star us on Github"
                   value=""
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Bug}
                   color={blue600}
                   title="Report Bugs"
                   value=""
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <QuickAccess data={Data.dashBoardPage.quickAccess}/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <ExtraSpace queryResponse={this.state.queryResponse} />
          <h1></h1>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <PastQuery data={Data.dashBoardPage.pastQuery}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <Pies data={Data.dashBoardPage.Pies}/>
        </div>
      </div>
    </div>
  );
 }
}


// const DashboardPage = () => {

//   return (
//     <div>
//       <h3 style={globalStyles.navigation}>Dashboard</h3>

//       <div className="row">

//         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
//           <InfoBox Icon={Build}
//                    color={blue600}
//                    title="Construct a Query"
//                    value=""
//           />
//         </div>


//         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
//           <InfoBox Icon={Assessment}
//                    color={blue600}
//                    title="Apollo Client Docs"
//                    value=""
//           />
//         </div>

//         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
//           <InfoBox Icon={Star}
//                    color={blue600}
//                    title="Star us on Github"
//                    value=""
//           />
//         </div>

//         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
//           <InfoBox Icon={Bug}
//                    color={blue600}
//                    title="Report Bugs"
//                    value=""
//           />
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
//           <QuickAccess data={Data.dashBoardPage.quickAccess}/>
//         </div>

//         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
//           <ExtraSpace/>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
//           <PastQuery data={Data.dashBoardPage.pastQuery}/>
//         </div>

//         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
//           <Pies data={Data.dashBoardPage.Pies}/>
//         </div>
//       </div>
//     </div>
//   );
// };

export default DashboardPage;
