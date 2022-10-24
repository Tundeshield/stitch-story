import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import TaskModal from '../../components/TaskModal';
import Page from '../../components/Page';

import UserInfoCard from '../../components/user/UserInfoCard';
import UserProjectContainer from '../../components/user/UserProjectContainer';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ViewUser = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const { id } = useParams();

  const getUser = async () => {
    const colRef = collection(db, 'clients');
    onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      const user = data.find((user) => user.id === id);
      setUser(user);
    });
  };

  useEffect(() => {
    console.log(user);
    getUser();
  }, []);

  return (
    <Page>
      <Container>
        <div>
          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                  name="Profile"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                >
                  Profile
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-around">
            <div className="w-3/5">
              <div id="myTabContent">
                <div
                  class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    <UserInfoCard
                      email={user.email}
                      companyName={user.companyName}
                      phone={user.phone}
                      fullName={`${user.firstName} ${user.lastName}`}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <UserProjectContainer />
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </Page>
  );
};

export default ViewUser;
