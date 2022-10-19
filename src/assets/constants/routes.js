export const LANDING = '/';
export const CREATEPROJECT = '/create-project';
export const PROJECTS = '/projects';
export const PROJECT = '/projects/:id';
export const TASK = '/projects/:projectid/:taskid';
export const CREATEUSER = '/create-user';
export const USER = '/view-users/:id';
export const USERS = '/view-users';
export const CLIENTPROJECTS = '/clients/:clientid/projects';
export const TRACKPROJECT = '/clients/:clientid/:projectid/track';
export const NOTFOUND = '*';

// <Route path={ROUTE.LANDING} element={<Login />} />
// <Route path="*" element={<NotFoundPage />} />

// {/* Admin Routes */}
// <Route path="/create-project" element={<CreateProject />} />
// <Route path="/projects" element={<Projects />} />
// <Route path="/projects/:projectID" element={<Project />} />
// <Route path="/create-user" element={<CreateUser />} />
// <Route path="/view-users" element={<ViewUsers />} />
// <Route path="/view-user/:userID" element={<ViewUser />} />

// {/* Customer Routes */}

// <Route path="/projects/:projectID/:taskID" element={<Task />} />
// <Route path="/my-projects/" element={<MyProjects />} />
// <Route path="/my-projects/track/:projectID" element={<TrackOrder />} />
