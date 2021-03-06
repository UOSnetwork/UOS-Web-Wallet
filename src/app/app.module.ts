import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
import { Ng2Webstorage } from 'ngx-webstorage'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatProgressBarModule,
  MatDialogModule,
  MatSelectModule,
  MAT_DIALOG_DATA, MatDialogRef,
  MatOptionModule,
  MatRadioModule,
  MatListModule,
  MatCheckboxModule,
  MatButtonToggleModule
} from '@angular/material'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'
import { PapaParseModule } from 'ngx-papaparse'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { DateCheckPipe } from './pipes'
import { GAnalyticsDirective } from './directive/g-analytics.directive'
import { AuthGuardService, ScatterService, FactoryPluginService, EosPluginService, ConfigService, AccountService, CryptoService, EosService, InformationService, InfoBarService } from './services'

import { SuccessDialogComponent,
  FailureDialogComponent,
  SendingDialogComponent,
  SelectAccountDialogComponent,
  InfoDialogComponent,
  AddEditNetworkDialogComponent,
  ChangeLastNetworkDialogComponent
} from './dialogs'

import { AppComponent } from './app.component'
import { PopupNoteComponent } from './popup-note/popup-note.component'
import { NavbarComponent } from './navbar/navbar.component'
import { MainManageAccountComponent } from './manage-account/main-manage-account/main-manage-account.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { CreateAccountComponent } from './create-account/create-account.component'
import { LoginComponent } from './login/login.component'
import { TransferTokensComponent } from './transfer-tokens/transfer-tokens.component'
import { FindAccountComponent } from './find-account/find-account.component'
import { GenerateKeyPairsComponent } from './generate-key-pairs/generate-key-pairs.component'
import { FaqComponent } from './faq/faq.component'
import { OurFeaturesComponent } from './our-features/our-features.component'
import { DelegateComponent } from './manage-account/delegate/delegate.component'
import { PremiumNameComponent } from './other/premium-name/premium-name.component'
import { UndelegateComponent } from './manage-account/undelegate/undelegate.component'
import { ManageVotingComponent } from './manage-voting/manage-voting.component'
import { CreateProxyComponent } from './manage-voting/create-proxy/create-proxy.component'
import { RegisterProxyInfoComponent } from './manage-voting/register-proxy-info/register-proxy-info.component'
import { ResignProxyComponent } from './manage-voting/resign-proxy/resign-proxy.component'
import { ClaimRewardsComponent } from './other/claim-rewards/claim-rewards.component'
import { UnregisterProxyInfoComponent } from './manage-voting/resign-proxy/unregister-proxy-info/unregister-proxy-info.component'
import { FooterComponent } from './footer/footer.component'
import { SetProxyComponent } from './manage-voting/set-proxy/set-proxy.component'
import { ContractsComponent } from './contracts/contracts.component'
import { DeployContractComponent } from './contracts/deploy-contract/deploy-contract.component'
import { InteractWithContractComponent } from './contracts/interact-with-contract/interact-with-contract.component'
import { InfoBarComponent } from './info-bar/info-bar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SideBarComponent } from './side-bar/side-bar.component'
import { TransactionBarComponent } from './transaction-bar/transaction-bar.component'
import { NameBindsBarComponent } from './name-binds-bar/name-binds-bar.component'
import { ManageAccountNavbarComponent } from './manage-account/manage-account-navbar/manage-account-navbar.component'
import { RemoveProducerComponent } from './manage-voting/remove-producer/remove-producer.component'
import { SetProducerComponent } from './manage-voting/set-producer/set-producer.component'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { UnchangedFieldComponent } from './unchanged-field/unchanged-field.component'
import { RegisterProducerComponent } from './manage-voting/register-producer/register-producer.component'
import { BuySellRamComponent } from './manage-account/buy-sell-ram/buy-sell-ram.component'
import { ManageVotingNavbarComponent } from './manage-voting/manage-voting-navbar/manage-voting-navbar.component'
import { UnregisterProducerComponent } from './manage-voting/unregister-producer/unregister-producer.component'
import { VoterProducerComponent } from './manage-voting/voter-producer/voter-producer.component'
import { UnlinkPermissionComponent } from './manage-account/unlink-permission/unlink-permission.component'
import { DeletePermissionComponent } from './manage-account/delete-permission/delete-permission.component'
import { AdvancedPermissionsComponent } from './manage-account/advanced-permissions/advanced-permissions.component'
import { SetRamFormComponent } from './manage-account/set-ram/set-ram-form/set-ram-form.component'
import { SetRamComponent } from './manage-account/set-ram/set-ram.component'
import { OtherComponent } from './other/other.component'
import { OtherNavbarComponent } from './other/other-navbar/other-navbar.component'
import { RefundStakeComponent } from './manage-account/refund-stake/refund-stake.component'
import { CancelDelayComponent } from './other/cancel-delay/cancel-delay.component'
import { OnErrorComponent } from './other/on-error/on-error.component'
import { SetAccountLimitsComponent } from './other/set-account-limits/set-account-limits.component'
import { SetGlobalLimitsComponent } from './other/set-global-limits/set-global-limits.component'
import { SetPrivilegeComponent } from './other/set-privilege/set-privilege.component'
import { SetParamsComponent } from './other/set-params/set-params.component'
import { ContractsNavbarComponent } from './contracts/contracts-navbar/contracts-navbar.component'
import { DeployAbiComponent } from './contracts/deploy-abi/deploy-abi.component'
import { LinkPermissionComponent } from './manage-account/link-permission/link-permission.component'
import { LinkUnlinkComponent } from './manage-account/link-unlink/link-unlink.component'
import { NavBarSliderComponent } from './nav-bar-slider/nav-bar-slider.component'
import { GetPermissionComponent } from './manage-account/get-permission/get-permission.component'
import { SetRamRateComponent } from './manage-account/set-ram/set-ram-rate/set-ram-rate.component'
import { UnchangedFieldLoginComponent } from './unchanged-field-login/unchanged-field-login.component'
import { BuyRamComponent } from './manage-account/buy-sell-ram/buy-ram/buy-ram.component'
import { SellRamComponent } from './manage-account/buy-sell-ram/sell-ram/sell-ram.component'
import { from } from 'rxjs'

export const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

library.add(faQuestionCircle)

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatOptionModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    FontAwesomeModule,
    PerfectScrollbarModule,
    PapaParseModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatTooltipModule,
    MatAutocompleteModule,
    FontAwesomeModule,
    PerfectScrollbarModule,
    PapaParseModule
  ],
  entryComponents: [
    SuccessDialogComponent,
    FailureDialogComponent,
    SendingDialogComponent,
    SelectAccountDialogComponent,
    InfoDialogComponent,
    AddEditNetworkDialogComponent,
    ChangeLastNetworkDialogComponent
  ]
})
export class MaterialModule {}

export function initializeApp (appConfig: ConfigService) {
  return () => appConfig.load()
}

export function initializeEos (eosService: EosService) {
  return () => eosService.load()
}

const appRoutes: Routes = [
  {
    path: '',
    component: TransferTokensComponent
  },
  {
    path: 'findAccount',
    component: FindAccountComponent
    // canActivate: [AuthGuardService]
  },
  {
    path: 'createAccount',
    component: CreateAccountComponent
    // canActivate: [AuthGuardService]
  },
  {
    path: 'transferTokens',
    component: TransferTokensComponent
  },
  {
    path: 'generateKeyPairs',
    component: GenerateKeyPairsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'ourFeatures',
    component: OurFeaturesComponent
  },
  {
    path: 'other',
    component: OtherComponent,
    children: [
      {
        path: '',
        redirectTo: 'setPrivilege',
        pathMatch: 'full'
      },
      {
        path: 'setParams',
        component: SetParamsComponent
      },
      {
        path: 'premiumName',
        component: PremiumNameComponent
      },
      {
        path: 'claimRewards',
        component: ClaimRewardsComponent
      },
      {
        path: 'cancelDelay',
        component: CancelDelayComponent
      },
      {
        path: 'onError',
        component: OnErrorComponent
      },
      {
        path: 'setPrivilege',
        component: SetPrivilegeComponent
      },
      {
        path: 'setAccountLimits',
        component: SetAccountLimitsComponent
      },
      {
        path: 'setGlobalLimits',
        component: SetGlobalLimitsComponent
      }
    ]
  },
  {
    path: 'premiumName',
    component: PremiumNameComponent
  },
  {
    path: 'manageAccount',
    component: MainManageAccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'delegate',
        pathMatch: 'full'
      },
      {
        path: 'delegate',
        component: DelegateComponent
      },
      {
        path: 'undelegate',
        component: UndelegateComponent
      },
      {
        path: 'buy-sell-ram',
        component: BuySellRamComponent
      },
      {
        path: 'link-unlink-permission',
        component: LinkUnlinkComponent
      },
      {
        path: 'delete-permission',
        component: DeletePermissionComponent
      },
      {
        path: 'advanced-permission',
        component: AdvancedPermissionsComponent
      },
      {
        path: 'set-ram',
        component: SetRamComponent
      },
      {
        path: 'refundStake',
        component: RefundStakeComponent
      },
      {
        path: 'get-permission',
        component: GetPermissionComponent
      }
    ]
  },
  {
    path: 'manageVoting',
    component: ManageVotingComponent,
    children: [
      {
        path: '',
        redirectTo: 'setProxy',
        pathMatch: 'full'
      },
      {
        path: 'createProxy',
        component: CreateProxyComponent
      },
      {
        path: 'setProxy',
        component: SetProxyComponent
      },
      {
        path: 'resignProxy',
        component: ResignProxyComponent
      },
      {
        path: 'registerProducer',
        component: RegisterProducerComponent
      },
      {
        path: 'removeProducer',
        component: RemoveProducerComponent
      },
      {
        path: 'setProducer',
        component: SetProducerComponent
      },
      {
        path: 'unregisterProducer',
        component: UnregisterProducerComponent
      },
      {
        path: 'voterProducer',
        component: VoterProducerComponent
      }
    ]
  },
  {
    path: 'infoBar',
    component: InfoBarComponent
  },
  {
    path: 'transactionBar',
    component: TransactionBarComponent
  },
  {
    path: 'nameBindsBar',
    component: NameBindsBarComponent
  },
  {
    path: 'contracts',
    component: ContractsComponent,
    children: [
      {
        path: '',
        redirectTo: 'interactWithContract',
        pathMatch: 'full'
      },
      {
        path: 'interactWithContract',
        component: InteractWithContractComponent
      },
      {
        path: 'deployContract',
        component: DeployContractComponent
      },
      {
        path: 'deployAbi',
        component: DeployAbiComponent
      }
    ]
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PopupNoteComponent,
    NavbarComponent,
    PageNotFoundComponent,
    MainManageAccountComponent,
    CreateAccountComponent,
    LoginComponent,
    TransferTokensComponent,
    GenerateKeyPairsComponent,
    FaqComponent,
    OurFeaturesComponent,
    DelegateComponent,
    PremiumNameComponent,
    UndelegateComponent,
    GenerateKeyPairsComponent,
    FindAccountComponent,
    ManageVotingComponent,
    CreateProxyComponent,
    RegisterProxyInfoComponent,
    ResignProxyComponent,
    UnregisterProxyInfoComponent,
    ClaimRewardsComponent,
    FooterComponent,
    SetProxyComponent,
    ContractsComponent,
    DeployContractComponent,
    InteractWithContractComponent,
    InfoBarComponent,
    TransactionBarComponent,
    NameBindsBarComponent,
    UnchangedFieldComponent,
    UnchangedFieldLoginComponent,
    SideBarComponent,
    ManageAccountNavbarComponent,
    RegisterProducerComponent,
    BuySellRamComponent,
    RemoveProducerComponent,
    ManageVotingNavbarComponent,
    SetProducerComponent,
    UnregisterProducerComponent,
    VoterProducerComponent,
    UnlinkPermissionComponent,
    DeletePermissionComponent,
    AdvancedPermissionsComponent,
    SetRamFormComponent,
    SetRamRateComponent,
    SetRamComponent,
    OtherComponent,
    OtherNavbarComponent,
    RefundStakeComponent,
    CancelDelayComponent,
    OnErrorComponent,
    FailureDialogComponent,
    SelectAccountDialogComponent,
    SuccessDialogComponent,
    SendingDialogComponent,
    InfoDialogComponent,
    AddEditNetworkDialogComponent,
    ChangeLastNetworkDialogComponent,
    SetAccountLimitsComponent,
    SetGlobalLimitsComponent,
    SetPrivilegeComponent,
    SetParamsComponent,
    ContractsNavbarComponent,
    DeployAbiComponent,
    LinkPermissionComponent,
    LinkUnlinkComponent,
    NavBarSliderComponent,
    GetPermissionComponent,
    BuyRamComponent,
    SellRamComponent,
    DateCheckPipe,
    GAnalyticsDirective
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes,
      {
        enableTracing: true,
        onSameUrlNavigation: 'reload'
      }
    ),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    NgbModule.forRoot()
  ],
  providers: [
    AccountService,
    AuthGuardService,
    InformationService,
    InfoBarService,
    FactoryPluginService,
    ScatterService,
    EosPluginService,
    CryptoService,
    EosService,
    ConfigService,
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService], multi: true },
    { provide: APP_INITIALIZER,
      useFactory: initializeEos,
      deps: [EosService], multi: true },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http)
}
