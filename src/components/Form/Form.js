const Input = ({ children }) => {
  return (
    <div class="mb-6 w-full">
      <label
        for="base-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {children}
      </label>
      <input
        type="text"
        id="base-input"
        class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

const TextArea = ({ label }) => {
  return (
    <div className="mb-6">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={`Write a ${label} ...`}
      />
    </div>
  );
};

const Dropdown = ({ label, options }) => {
  return (
    <div className="mb-6">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option>{option.companyName}</option>
        ))}
      </select>
    </div>
  );
};
const UserCatDropdown = ({ label, options }) => {
  return (
    <div className="mb-6 mt-4">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option>{option.category}</option>
        ))}
      </select>
    </div>
  );
};

const CheckedToggle = () => {
  return (
    <>
      <label
        for="checked-toggle"
        class="inline-flex relative items-center mb-4 cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="checked-toggle"
          class="sr-only peer"
          checked
        />
        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Checked toggle
        </span>
      </label>
    </>
  );
};

const UploadInput = () => {
  return (
    <>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="user_avatar"
      >
        Upload file
      </label>
      <input
        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
      />
      <div
        class="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="user_avatar_help"
      >
        A profile picture is useful to confirm your are logged into your account
      </div>
    </>
  );
};

const EmailInput = () => {
  return (
    <>
      <label
        for="helper-text"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Your email
      </label>
      <input
        type="email"
        id="helper-text"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com"
      />
    </>
  );
};

export {
  Input,
  TextArea,
  Dropdown,
  CheckedToggle,
  UploadInput,
  EmailInput,
  UserCatDropdown,
};
