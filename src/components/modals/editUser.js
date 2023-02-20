import { useState } from "react";
import { Dialog } from "@headlessui/react";

// FORM
import { Formik } from "formik";

// ICON
import EditIcon from "@/components/icons/edit";

export default function EditUser({ index, user, editUserList }) {
  const [isOpen, setIsOpen] = useState(false);

  const inputStyle = "border border-black p-1 rounded mt-1 w-full";

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="hover:text-gray-500">
        <EditIcon />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-full md:w-2/3 rounded bg-white p-4">
            <h3 className="text-lg font-bold">Edit User Data</h3>
            <Formik
              initialValues={user}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="mt-2" onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <p>Name</p>
                    <input
                      className={inputStyle}
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </div>
                  <div className="mt-2">
                    <p>Username</p>
                    <input
                      className={inputStyle}
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                  </div>
                  <div className="mt-2">
                    <p>Email</p>
                    <input
                      className={inputStyle}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <div className="mt-2">
                    <p>Address</p>
                    <input
                      className={inputStyle}
                      type="text"
                      name="street"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address.street}
                    />
                    <input
                      className={inputStyle}
                      type="text"
                      name="suite"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address.suite}
                    />
                    <input
                      className={inputStyle}
                      type="text"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address.city}
                    />
                  </div>
                  <div className="mt-2">
                    <p>Phone</p>
                    <input
                      className={inputStyle}
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                  </div>
                  <div className="mt-2">
                    <p>Website</p>
                    <input
                      className={inputStyle}
                      type="text"
                      name="website"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.website}
                    />
                  </div>
                  <div className="mt-2">
                    <p>Company</p>
                    <input
                      className={inputStyle}
                      type="text"
                      name="company.name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company.name}
                    />
                    <input
                      className={inputStyle}
                      type="text"
                      name="company.catchPhrase"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company.catchPhrase}
                    />
                    <input
                      className={inputStyle}
                      type="text"
                      name="company.bs"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company.bs}
                    />
                  </div>
                  <div className="flex mt-4 justify-end">
                    <button
                      className="mr-2 p-2 border border-white rounded hover:border-black transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="p-2 rounded hover:bg-[#3cd04d] hover:text-white transition-all"
                      onClick={() => {
                        editUserList(index, values);
                        setIsOpen(false);
                      }}
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
