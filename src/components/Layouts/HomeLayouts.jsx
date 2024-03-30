import { useEffect, useState } from "react";

const HomeLayouts = (props) => {
  const { children } = props;
  const [derajat, setDerajat] = useState(0);

  const users = [
    {
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    },
  ];

  // auth pengecek acount ada atau tidak
  useEffect(() => {
    if (localStorage.key("username") === null) {
      window.location.href = "/login";
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    window.location.href = "/login";
  };

  const handleScroll = () => {
    const valueHeight = window.pageYOffset;

    setDerajat(valueHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.clear();
  console.log(derajat);
  return (
    <section>
      <div
        className={`w-full flex flex-col ${
          derajat < 1 ? "fixed" : ""
        } top-0 z-50`}
      >
        {users?.map((item) => (
          <div
            key={item.email}
            className="w-full flex justify-between gap-2 bg-white px-4 py-3 lg:px-12"
          >
            <div className="w-3/12 flex gap-3 text-xs self-center lg:text-sm">
              <h3 className="hidden lg:block">(021) 5322 701</h3>
              <h3>linmtrans@gmail.co.id</h3>
            </div>
            <div className="w-9/12 flex flex-col gap-4 self-center">
              <div className="flex justify-end gap-2">
                <h1 className="text-sm bg-blue-400 rounded-md text-white px-2 self-center">
                  {item.username}
                </h1>
                <button
                  onClick={handleLogout}
                  className="bg-red-700 px-2 rounded-xl font-light text-white pb-1 text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col pt-12">{children}</div>
    </section>
  );
};

export default HomeLayouts;
