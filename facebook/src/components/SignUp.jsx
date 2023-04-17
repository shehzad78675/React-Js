const SignUp = () => {
    const inputStyle = "border-2 border-solid border-gray-400 p-3 text-lg w-96 rounded-lg focus:outline-blue-600";
  return (
    <div className="bg-slate-100 flex justify-center min-h-screen items-center">
      <div className="title p-32 -mt-44 w-2/4">
        <h1 className="text-blue-600 text-6xl mb-5 font-extrabold">facebook</h1>
        <p className="text-2xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div>
        <div className="flex flex-col space-y-3 bg-white p-4 text-center shadow-xl rounded-lg">
          <input
            className={inputStyle}
            type="text"
            placeholder="Email address or phone number"
          />
          <input
            className={inputStyle}
            type="text"
            placeholder="Password"
          />
          <button className="border-2 border-solid bg-blue-600 text-white p-3 text-lg w-96 rounded-lg hover:bg-blue-700">
            Log In
          </button>
          <a href="#" className="text-blue-600 py-3 hover:underline">
            Forgotten password?
          </a>
          <hr />
          <button className="border-2 bg-green-600 p-3 text-xl w-56 self-center rounded-lg text-white hover:bg-green-700">
            Create New Account
          </button>
        </div>
        <p className="text-center p-6"><a href="#" className="font-bold hover:underline">Create a Page</a> for a celebrity, brand or business.</p>
      </div>
    </div>
  );
};

export default SignUp;
