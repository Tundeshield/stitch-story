import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import Container from '../../components/Container';
import { ErrorDisplay } from '../../components/Form/Form';
import ProjectHeader from '../../components/ProjectHeader';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import SaveIcon from '@mui/icons-material/Save';
import { db, storage, timestamp } from '../../utils/firebase';
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { generatePath, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import qrcode from 'qrcode';
import img1 from '../../assets/images/googleIcon.png';
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { v4 } from 'uuid';
import { useUploadFile } from 'react-firebase-hooks/storage';

const CreateProject = () => {
  const tasks = useSelector((state) => state.task);
  const [clients, setClients] = useState([]);
  const [qrSrc, setQrSrc] = useState('');

  const [uploadFile, uploading, snapshot, error] = useUploadFile();

  const headers = [
    {
      id: 1235768,
      title: 'Create New Project',
      url: '#',
    },
  ];

  //Qr CODE OPTIONS
  var opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    quality: 0.3,
    margin: 1,
    color: {
      dark: '#0B0B46', // Blue dots
      light: '#FFFFFF', // Transparent background
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const navigate = useNavigate();

  //Generate path for new projects - a precursor for implementing qr codes
  const generateProjectPath = (id) => {
    const path = generatePath('/projects/:id/', {
      id: id,
    });
    return path;
  };

  const getData = async () => {
    const colRef = collection(db, 'clients');
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,

      ...doc.data(),
    }));
    setClients(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSaveProject = async (data) => {
    const { title, client, description } = data;
    const colRef = collection(db, 'projects');
    const docRef = await addDoc(colRef, {
      title,
      client,
      description,
      timestamp: serverTimestamp(),
    });

    //Generate path for new projects - a precursor for implementing qr codes
    let p = generateProjectPath(docRef.id);
    const path = window.location.origin + p;

    //Generate QR code
    const qr = await qrcode.toDataURL(path, opts);
    setQrSrc(qr);

    // Upload qr code to firebase storage
    const blob = await fetch(qr).then((r) => r.blob());
    const storageRef = ref(storage, `qrCodes/${docRef.id}/${client + v4()}`);
    const uploadTask = await uploadBytes(storageRef, blob);
    const downloadUrl = await getDownloadURL(uploadTask.ref);
    console.log(downloadUrl);

    navigate(`/tasks/create/${docRef.id}`);
  };

  return (
    <Page>
      <Container>
        <ProjectHeader header={headers} />
        <div className="flex flex-col md:flex  justify-between relative">
          <div className="flex justify-between">
            <section className=" p-4 bg-white rounded-lg dark:bg-gray-800 md:w-full">
              <form
                className="overflow-hidden  bg-white drop-shadow-lg sm:rounded-lg px-4 py-5 sm:px-6 "
                onSubmit={handleSubmit((data) => handleSaveProject(data))}
              >
                <div class="mb-6 w-full">
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Project Title
                  </label>
                  <input
                    {...register('title', { required: true, maxLength: 70 })}
                    type="text"
                    id="base-input"
                    placeholder="Enter Project Title, not more than 70 characters"
                    class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.title && <ErrorDisplay title="title" />}
                </div>
                <div className="mb-6">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Clients
                  </label>
                  <select
                    {...register('client', { required: true })}
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select customer</option>
                    {clients.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.companyName}
                      </option>
                    ))}
                  </select>
                  {errors.client && <ErrorDisplay title="customer" />}
                </div>
                <div className="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Description
                  </label>
                  <textarea
                    {...register('description', {
                      required: true,
                      maxLength: 150,
                    })}
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={`Write a description of not more than 150 characters ...`}
                  />
                  {errors.description && <ErrorDisplay title="description" />}
                </div>
                <span className="flex justify-between">
                  <Button>
                    Save New Project And Tasks Next <NavigateNextIcon />
                  </Button>
                </span>
              </form>
            </section>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default CreateProject;
