"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import tabGallery from "@/data/tab-gallery.json";
import projects from "@/data/projects.json";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProjectList = () => {
  const [DataImg, setDataImg] = useState(projects);
  const [Choice, setChoice] = useState(0);
  const [IsOpen, setIsOpen] = useState(false);
  const [IsParam, setIsParam] = useState({});

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(data) {
    setIsParam(data);
    setIsOpen(true);
  }

  useEffect(() => {
    let data = [];
    projects.map((item, idx) => {
      let eachTipe = item.id_tipe;
      if (eachTipe === Choice) {
        data.push(item);
      } else if (Choice === 0) {
        data.push(item);
      }
    });
    setDataImg(data);
  }, [Choice]);

  return (
    <>
      <div className="container pt-10 px-20">
        <div className="w-full px-2 py-16 sm:px-0">
          <Tab.Group className="w-[75%] mx-auto py-10">
            <Tab.List className="flex justify-center space-x-1 rounded-full border border-red-600 bg-white/5 p-1">
              {tabGallery.map((value, idx) => (
                <Tab
                  onClick={() => {
                    setChoice(value.id_tipe);
                  }}
                  key={idx}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-full py-2.5 text-sm font-medium leading-5",
                      "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-red-600 text-white shadow"
                        : "text-red-600 hover:ring-2 hover:ring-offset-red-600 hover:text-red-600"
                    )
                  }
                >
                  {value.name_tab}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
          <div className="grid grid-cols-4 gap-2 min-h-screen">
            {DataImg.map((val, idx) => (
              <div
                key={idx}
                onClick={() => openModal(val)}
                className="max-w-full cursor-pointer"
              >
                <Image
                  src={"/assets/images/projects/" + val.path}
                  width={400}
                  height={24}
                  priority={true}
                  alt="Logo Mitramedia Advertising"
                  className="aspect-auto rounded-lg"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Transition appear show={IsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform rounded-2xl text-left align-middle shadow-xl transition-all lg:w-1/3">
                  <Image
                    src={"/assets/images/projects/" + IsParam.path}
                    width={400}
                    height={24}
                    priority={true}
                    alt="Logo Mitramedia Advertising"
                    className="aspect-auto rounded-lg w-full"
                    quality={100}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectList;
