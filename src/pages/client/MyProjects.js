import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ChangePassword } from '../../components/Alerts';
import OrderCard from '../../components/client/OrderCard';
import Container from '../../components/Container';
import Page from '../../components/Page';
import ProjectHeader from '../../components/ProjectHeader';
import { auth, db } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import img from '../../assets/images/checkback.png';

const MyProjects = () => {
  const headers = [
    {
      id: 123456,
      title: 'Your orders',
    },
  ];
  const [user, loading, error] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);

  const getProjects = async (id) => {
    const colRef = collection(db, 'projects');
    const q = query(colRef, where('client', '==', user.uid));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMyOrders(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Page>
      <Container>
        <ProjectHeader header={headers} />
        <div className="flex flex-col items-center mt-4 container px-6 mx-auto  h-screen ">
          {myOrders.map((order) => (
            <OrderCard order={order} />
          ))}
          {myOrders.length === 0 && <img src={img} alt="checkback" />}
        </div>
      </Container>
    </Page>
  );
};

export default MyProjects;
