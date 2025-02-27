import { Component, Inject, OnDestroy } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IClientsService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ClientModelForm } from '../client.models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { ISnackbarManagerService } from '../../services/isnackbar-manager.service';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';

@Component({
  selector: 'app-new-client',
  imports: [ClientFormComponent],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss',
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService}
  ]
})
export class NewClientComponent implements OnDestroy {

constructor(
  @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly clientsService: IClientsService,
  @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackbarService: ISnackbarManagerService,
  private readonly router: Router
) 
{}
  private httpSubscription?: Subscription;

ngOnDestroy(): void {
  if(this.httpSubscription) {
    this.httpSubscription.unsubscribe();
  }
  }

  onSubmitClient (value: ClientModelForm) {
    const {id, ...request} = value;
    this.httpSubscription = this.clientsService.save(request).subscribe(_ => {
      this.snackbarService.show('Usuário cadastrado com sucesso')
      this.router.navigate(['clients/list'])
    })
  }


}
