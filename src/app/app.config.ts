import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';

// Al ser Standalone se importa los provide aquí para poder utilizar depende que modulo, animacion o servicio
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
              provideAnimationsAsync(), provideHttpClient(),
              {provide: LOCALE_ID, useValue: 'es'}
  ]
};
