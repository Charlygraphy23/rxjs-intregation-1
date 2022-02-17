import { map, Observable } from "rxjs";
import Data from "../data.json";
import { UserDetails } from "../interface/data.ts";

class ObservableData {
  observer$: Observable<any> | null = null;

  createObservable() {
    return (this.observer$ = new Observable((subscriber) => {
      subscriber.next(Data);
    }));
  }

  getAllData(): UserDetails[] {
    let data: UserDetails[] = [];

    this.observer$?.subscribe((res: UserDetails[]) => (data = res));

    return data;
  }

  getObservable() {
    return this.observer$;
  }
}

export default ObservableData;
