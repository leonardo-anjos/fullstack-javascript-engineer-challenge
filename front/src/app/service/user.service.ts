import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../environments/environment';
import { IUser, UserDto } from '../interfaces/user.interfaces';

@Injectable()
export class UserService {
  constructor() { }

  getAll(): Promise<Array<IUser>> {
    return new Promise((resolve, reject) => {
      axios.get(`${environment.api.url}/user`)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(reject);
    });
  }

  getById(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.get(`${environment.api.url}/user/${userId}`)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(err => {
          reject(err.response.data);
        });
    });
  }

  save(user: UserDto): Promise<any> {
    axios.defaults.timeout = 1200000;
    return new Promise((resolve, reject) => {
      axios.post(`${environment.api.url}/user/create`, user)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(err => {
          reject(err.response.data);
        });
    });
  }

  delete(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.delete(`${environment.api.url}/user/${userId}/delete`)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(err => {
          reject(err.response.data);
        });
    });
  }

  update(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.put(`${environment.api.url}/user/${userId}/delete`)
        .then((result: AxiosResponse) => {
          resolve(result.data);
        }).catch(err => {
          reject(err.response.data);
        });
    });
  }
}
