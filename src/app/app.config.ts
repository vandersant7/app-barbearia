import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgxMask } from 'ngx-mask'; // Importação do módulo ngx-mask que serve para formatação de campos. Por exemplo, para formatação de CPF, telefone, data, etc.

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes), 
              provideAnimationsAsync(), 
              provideHttpClient(withInterceptorsFromDi()), // providehttpClient serve para interceptar requisições HTTP em todos os componentes da aplicação antes de serem enviadas. É a maneira como o Angular se comunica com o backend.
              provideNgxMask({})],
};
