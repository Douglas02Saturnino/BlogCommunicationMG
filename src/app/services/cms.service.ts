import { Injectable } from '@angular/core';
import { defineOneEntry } from 'oneentry';
import {  IPagesEntity } from 'oneentry/dist/pages/pagesInterfaces';

let { Pages } = defineOneEntry('https://blogcommunicationmg.oneentry.cloud', {
  token: 'site-comuniccation-mg',
  userToken: 'user.token',
  langCode: 'en_US',
})

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor() { }

  async getAllPages(): Promise<IPagesEntity[]> {
    try {
      const pages = await Pages.getPages();
      return pages;
    } catch (error) {
      console.error('Error ao buscar todas as páginas:', error);
      return [];
    }
  }
}
