import Page from '../components/Page';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* <SideMenu /> */}

      <div className="min-h-full w-full bg-grey">
        <Page>The real items to be listed</Page>
      </div>
    </div>
  );
};

export default Dashboard;
