import "./styles.css";
import { useEffect, useState } from "react";
import ObservableData from "./rx/index";
import { UserDetails } from "./interface/data.ts";
import { map } from "rxjs";

export default function App() {
  const [listData, setListData] = useState<UserDetails[]>([]);
  useEffect(() => {
    const data$ = new ObservableData();
    const observer = data$.getObservable();

    // results$.pipe(take(1));
    data$.createObservable();

    // observer?.pipe(map((d: UserDetails) => d.slice(0, 1)));

    setListData(data$.getAllData());
  }, []);

  return (
    <ul className="App">
      {listData &&
        listData.map((value, i) => <li key={i}>{value.firstName}</li>)}
    </ul>
  );
}
