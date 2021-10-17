import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public static readonly DOMAIN: string = 'https://backend.wuffy.dev';

  public static readonly postAccountLogout: string = `${ApiService.DOMAIN}/account/logout`;
  public static readonly postAccountLogoutCheck: string = `${ApiService.DOMAIN}/account/logout/check`;
  public static readonly postAccountLogin: string = `${ApiService.DOMAIN}/account/login`;
  public static readonly postAccountCreate: string = `${ApiService.DOMAIN}/account/create`;
  public static readonly postAccountUpdate: string = `${ApiService.DOMAIN}/account/update`;
  public static readonly postAccountPassword: string = `${ApiService.DOMAIN}/account/update/password`;
  public static readonly postAccountDelete: string = `${ApiService.DOMAIN}/account/delete`;
  public static readonly postAccountSearch: string = `${ApiService.DOMAIN}/account/search`;

  public static readonly postSettingEvent: string = `${ApiService.DOMAIN}/setting/event`;
  public static readonly postSettingEventUpdate: string = `${ApiService.DOMAIN}/setting/event/update`;
  public static readonly postSettingEventDelete: string = `${ApiService.DOMAIN}/setting/event/delete`;
}
