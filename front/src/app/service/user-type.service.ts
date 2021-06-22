import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../environments/environment';
import { IUserType, UserTypeDto } from '../interfaces/user-type.interfaces';

@Injectable()
export class UserTypeService {

  getAll(): Promise<Array<IUserType>> {
    return new Promise((resolve, reject) => {
      axios.get(`${environment.api.url}/user-type`)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(reject);
    });
  }

  getById(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.put(`${environment.api.url}/user-type/${userId}`)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(err => {
          reject(err.response.data);
        });
    });
  }

  save(user: UserTypeDto): Promise<any> {
    axios.defaults.timeout = 1200000;
    return new Promise((resolve, reject) => {
      axios.post(`${environment.api.url}/user-type/create`, user)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(err => {
          reject(err.response.data);
        });
    });
  }

  delete(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.delete(`${environment.api.url}/user-type/${userId}/delete`)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(err => {
          reject(err.response.data);
        });
    });
  }

  update(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.put(`${environment.api.url}/user-type/${userId}/delete`)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(err => {
          reject(err.response.data);
        });
    });
  }
}
