

import { environment } from '../../environments/environment';

export class Urls {
    private static BASE_URL: string = environment.api_base_url;

    public static readonly SESSIONS = `${Urls.BASE_URL}/sessionDetails`;
    public static readonly LOGIN = `${Urls.BASE_URL}/Users/login`;
    public static readonly LOGOUT = `${Urls.BASE_URL}/Users/logout`;
    public static readonly ACCOUNT = `${Urls.BASE_URL}/Users`;
    public static readonly USERS = `${Urls.BASE_URL}/Users`;
    public static readonly DOCTOR = `${Urls.BASE_URL}/doctorLists`;
    public static readonly PATIENT = `${Urls.BASE_URL}/patientLists`;
    public static readonly GAME = `${Urls.BASE_URL}/gameLists`;
    public static readonly FILES = `${Urls.BASE_URL}/files`;
    public static readonly ALLS = `${Urls.BASE_URL}/Alls`;
    public static readonly APPOINTMENT = `${Urls.BASE_URL}/appointments`;
    public static readonly PRESCRIBEDGAME = `${Urls.BASE_URL}/gamesPrescribeds`;
    public static readonly WASTE = `${Urls.BASE_URL}/wastecollecteds`;
    public static readonly TRIPS = `${Urls.BASE_URL}/trips`;
    public static readonly REVENUE = `${Urls.BASE_URL}/revenues`;
    public static readonly EXPENSE = `${Urls.BASE_URL}/expenses`;
    public static readonly SALARY = `${Urls.BASE_URL}/salaries`;
    public static readonly CUSTOMERS = `${Urls.BASE_URL}/customers`;
    public static readonly MONEYCOLLECT = `${Urls.BASE_URL}/moneycollections`;
    public static readonly DIS = `${Urls.BASE_URL}/districts`;
    public static readonly CEN = `${Urls.BASE_URL}/newCenters`;
    public static readonly WLIST = `${Urls.BASE_URL}/wasteLists`;
    public static readonly CNWLIST = `${Urls.BASE_URL}/wasteLists`;
    public static readonly CENTER = `${Urls.BASE_URL}/centers`;
    public static readonly NEWWASTECOLL = `${Urls.BASE_URL}/newWasteCollecteds`;
    public static readonly EMPLOYEE = `${Urls.BASE_URL}/employeeLists`;
    public static readonly AGGREGATED = `${Urls.BASE_URL}//aggregatedWastes`;
    public static readonly SOLD = `${Urls.BASE_URL}//soldWastes`;
    public static readonly NEWCUST = `${Urls.BASE_URL}/newCustomerLists`;
    public static readonly FACT = `${Urls.BASE_URL}/outgoingWastes`;
}
