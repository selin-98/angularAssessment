import { Injectable } from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import DataSource from 'devextreme/data/data_source';

@Injectable()
export class EmployeeService {

  public getCustomDataSource() {
    return new DataSource({
      load: (loadOptions) => {
        return new Promise((resolve, reject) => {
          const data = {};
          resolve(data);
        });
      },
      insert: (value: any) => {
        var ll = {"title":"ffasfa","firstName":"fasfaf","lastName":"fasdfasf","Position":"fasdfasf","birthDate":"2023-03-02T00:00:00","HireDate":"2023-03-17T00:00:00.000Z","countryCode":"TR","address":"fsdfafa"};
        var keys = Object.getOwnPropertyNames(value.values);
        var model: any = {};
        keys.forEach(element=> {
          model[element] = value.values[element];
        });
        return new Promise((resolve, reject) => {
          const data = {};
          //http service...
          resolve(model);
        });
      },
      byKey: (key) => {
        return new Promise((resolve, reject) => {
          const obj = {};
          resolve(obj);
        });
      }
    });
  }

  getDataSource() {
    var url = 'http://tport.api.meetingpointturkey.com/v1';
    return AspNetData.createStore({
      key: 'id',
      loadUrl: `${url}/employee`,
      insertUrl: `${url}/employee`,
      updateUrl: `${url}/employee`,
      deleteUrl: `${url}/employee`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: false };
      },
    });
  }
}