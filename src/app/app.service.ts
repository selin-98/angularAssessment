import { Injectable } from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

@Injectable()
export class Service {
  getDataSource() {
  var url = 'http://tport.api.meetingpointturkey.com/v1';
  return AspNetData.createStore({
      key: 'OrderID',
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