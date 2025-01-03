import { appStore } from "@/Store/AppStore";
import { Input } from "./ui/input";
import { ChangeEvent } from "react";

export default function Search() {
  const { search, setSearch } = appStore();

  const searchandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Input
        type="search"
        value={search}
        onChange={searchandler}
        placeholder="Search contacts"
        className=" sm:min-w-96"
      />
    </div>
  );
}
