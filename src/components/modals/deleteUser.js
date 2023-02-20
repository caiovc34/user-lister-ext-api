import { useState } from "react";
import { Dialog } from "@headlessui/react";

// ICON
import DeleteIcon from "@/components/icons/delete";

export default function DeleteUser({ index, editUserList }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative z-10 hover:text-gray-500"
      >
        <DeleteIcon />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
            <h3 className="text-lg">
              Are you sure you want to delete the user?
            </h3>
            <div className="flex mt-2 justify-end">
              <button
                className="mr-2 p-2 border border-white rounded hover:border-black transition-all"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="p-2 rounded hover:bg-[#d0433c] hover:text-white transition-all"
                onClick={() => {
                  editUserList(index);
                  setIsOpen(false);
                }}
              >
                Delete
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
