import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { PropsWithChildren, useState } from "react";
import { isMacOs, isMobile } from "react-device-detect";
import sdkLinksJson from "./sdk-links.json";
import clsx from "clsx";
import {
  IconCheck,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import { TsIcon } from "@site/src/components/TsIcon";
import IconExternalLink from "@theme/Icon/ExternalLink";

export default function Sdks() {
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [showAllCategories, setShowAllCategories] = useState(true);
  const allCategories = sdkLinksJson.flatMap((link) => link.categories);
  const sdkLinksJsonFiltered = sdkLinksJson.filter((link) => {
    if (showAllCategories) return true;
    return link.categories.some((category) =>
      filteredCategories.includes(category)
    );
  });
  return (
    <Layout
      title={`SDKs`}
      description={`Explore SDKs for up-to-date and relevant public APIs.`}
    >
      <Head>
        <meta property="og:image" content="/img/sdk-explore-link-preview.png" />
        <style>
          {`
          .navbar__search {
            display: none;
          }
          `}
        </style>
      </Head>
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        className="bg-slate-100"
      >
        <div className="py-44 pb-56 bg-gradient-to-br from-blue-950 to-blue-700">
          <div className="text-center ">
            <h1 className="text-blue-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Explore <span className="text-white">{sdkLinksJson.length}</span>{" "}
              SDKs for <br />
              <span className="">
                <span className="italic">up-to-date</span> and{" "}
                <span className="italic">relevant</span> public APIs
              </span>
            </h1>
            <div className="text-blue-300">
              <Hotkey />
              for{" "}
              <span className="text-sm rounded-full bg-gradient-to-r from-blue-400/30 via-blue-400 to-sky-blue/30 px-[1px] py-[5px] font-medium text-blue-300">
                <span className="rounded-full px-2 py-1 bg-slate-800">{`"company/api/language"`}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="sm:w-[480px] md:w-[600px] lg:w-[768px] flex flex-col bg-gradient-to-b from-slate-50 to-white mx-auto relative px-5 py-10 top-[-75px] rounded-sm bg-white shadow-xl">
          <div className="absolute flex flex-col z-0 inset-0 m-auto w-fit text-blue-400 font-bold text-sm top-[-50px]">
            <div>Start scrolling to explore 👀</div>
            <IconChevronDown className="mx-auto" />
          </div>
          <div className="pl-4 text-xs text-slate-500 font-semibold mb-2">
            Click a category to filter
          </div>
          <div className="px-4 pb-3 flex flex-wrap gap-2">
            <CategoryFilter
              category="Show All Categories"
              filteredCategories={filteredCategories}
              showAllCategories={showAllCategories}
              setShowAllCategories={setShowAllCategories}
              setFilteredCategories={setFilteredCategories}
            />
            {allCategories.map((category) => {
              return (
                <CategoryFilter
                  category={category}
                  filteredCategories={filteredCategories}
                  showAllCategories={showAllCategories}
                  setShowAllCategories={setShowAllCategories}
                  setFilteredCategories={setFilteredCategories}
                />
              );
            })}
          </div>
          {sdkLinksJsonFiltered.map(
            (
              { index, link, homepage, favicon, categories, apiVersion },
              idx
            ) => (
              <a className="hover:no-underline z-10" href={link}>
                <div
                  className={clsx(
                    "group hover:bg-slate-200 px-4 py-6 flex items-center gap-6 justify-between",
                    {
                      "border-b": idx !== sdkLinksJsonFiltered.length - 1,
                    }
                  )}
                  key={index}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="shrink-0 h-5 w-5">
                        <TsIcon />
                      </div>
                      <div className="font-mono font-semibold text-sm sm:text-base">
                        {index}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                      {categories.map((category) => {
                        return (
                          <CategoryFilter
                            category={category}
                            filteredCategories={filteredCategories}
                            showAllCategories={showAllCategories}
                            setShowAllCategories={setShowAllCategories}
                            setFilteredCategories={setFilteredCategories}
                          />
                        );
                      })}
                      <a
                        className="flex w-fit items-center group/link text-slate-400 hover:text-slate-700 text-xs sm:text-sm hover:no-underline"
                        target="_blank"
                        href={`https://${homepage}`}
                      >
                        <div className="shrink-0 h-5 w-5 mr-1">
                          <img
                            className="w-full transition-all group-hover/link:opacity-100 h-full object-cover opacity-30"
                            src={favicon}
                          />
                        </div>
                        <div>{homepage}</div>
                        <IconExternalLink height="11.5" />
                      </a>
                      <div className="text-slate-400 text-xs">{apiVersion}</div>
                    </div>
                  </div>
                  <IconChevronRight className="shrink-0 text-slate-400 group-hover:text-slate-500 relative group-hover:translate-x-1 group-hover:scale-110 transition-all" />
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}

function CategoryFilter({
  category,
  filteredCategories,
  showAllCategories,
  setShowAllCategories,
  setFilteredCategories,
}: {
  category: string;
  filteredCategories: string[];
  showAllCategories: boolean;
  setShowAllCategories: (showAllCategories: boolean) => void;
  setFilteredCategories: (filteredCategories: string[]) => void;
}) {
  const selected =
    (!showAllCategories && filteredCategories.includes(category)) ||
    (showAllCategories && category === "Show All Categories");
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (category === "Show All Categories") {
          setShowAllCategories(true);
          setFilteredCategories([]);
        } else {
          setShowAllCategories(false);
          if (filteredCategories.includes(category)) {
            const newFilteredCategories = filteredCategories.filter(
              (c) => c !== category
            );
            setFilteredCategories(newFilteredCategories);
            if (newFilteredCategories.length === 0) setShowAllCategories(true);
          } else {
            setFilteredCategories([...filteredCategories, category]);
          }
        }
      }}
      className={clsx(
        "z-10 flex items-center gap-1 border font-medium rounded-md text-xs px-2 py-1 transition-all",
        {
          "bg-blue-50 hover:bg-blue-100 border-blue-300 text-blue-600 hover:text-blue-800":
            selected,
          "bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-800":
            !selected,
        }
      )}
    >
      {selected ? <IconCheck className="h-4 w-4" /> : null}
      <span>{category}</span>
    </button>
  );
}

function Hotkey() {
  if (isMobile) <Key>{"Find in page..."}</Key>;
  if (isMacOs)
    return (
      <>
        <Key>Cmd</Key>
        <Key className="ml-[3px] mr-2">F</Key>
      </>
    );
  return (
    <>
      <Key>Ctrl</Key>
      <Key className="ml-[3px] mr-2">F</Key>
    </>
  );
}

function Key({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <kbd
      className={clsx(
        "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
        className
      )}
    >
      {children}
    </kbd>
  );
}