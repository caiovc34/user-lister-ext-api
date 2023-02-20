import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const mainData = {
    title: "user list",
    text: "Select a user to see extra info.",
    headerStyle:
      "sticky top-0 font-normal bg-gray-200 py-2 px-4 border border-gray-300 border-b-gray-500",
    headerLabels: [
      "id",
      "name",
      "username",
      "email",
      "address",
      "phone",
      "website",
      "company",
      "completed todos",
      "",
    ],
    bodyStyle: "py-2 px-4 border border-gray-300 user-values",
    error: { title: "user list not found", msg: "please try again" },
  };

  return (
    <>
      <Component data={mainData} {...pageProps} />
      <div className="fixed w-full bottom-4">
        <p className="text-xs text-center">© Caio Cristo - 2023</p>
      </div>
    </>
  );
}
