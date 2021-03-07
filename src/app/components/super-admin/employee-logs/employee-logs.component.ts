import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ElementRef, ViewChild, VERSION } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: any[] = [
  { empId: 480331, empName: 'INFSYS',empEmail:"asf@gmail.com", location: "Bangalore",empType:"employee", status: 'Submitted' },
];

const CARD_DATA: any[] = [
  { cardId: 480331, cardFormat: 'INFSYS',reason:"new card issued", dateOfActivation: "13-02-21", status: 'Submitted' },
];


const ACCESS_DATA: any[] = [
  { masterProfile: "Project A", sourceName: 'GENETIC',profileName:"ODC_4", status: 'Revoke Submitted' },
  { masterProfile: "Project B", sourceName: 'GENETIC',profileName:"ODC_4", status: 'Revoke Submitted' },
];

const DETAILS_DATA: any[] = [
  { reason: "Revoke submitted employee access to profile project A", date: "13-02-21",processedBy:"BATCH" },
  { reason: "Revoke submitted employee access to profile project A", date: "13-02-21",processedBy:"BATCH" },
];
@Component({
  selector: 'app-employee-logs',
  templateUrl: './employee-logs.component.html',
  styleUrls: ['./employee-logs.component.css']
})
export class EmployeeLogsComponent implements OnInit {
  employeeOpenState = true;
  cardOpenState = true;
  accessOpenState = true;
  detailsOpenState = true;
  mobileQuery: MediaQueryList;
  opened: boolean = true;
 

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  displayedColumns: string[] = ['empId', 'empName', 'empEmail', 'location', 'empType', 'status'];

  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);



  cardDisplayedColumns: string[] = ['cardId', 'cardFormat', 'reason', 'dateOfActivation',  'status'];

  card_dataSource = new MatTableDataSource<any>(CARD_DATA);



  accessDisplayedColumns: string[] = ['masterProfile', 'sourceName', 'profileName','status'];

  access_dataSource = new MatTableDataSource<any>(ACCESS_DATA);



  detailsDisplayedColumns: string[] = ['reason', 'date', 'processedBy'];

  details_dataSource = new MatTableDataSource<any>(DETAILS_DATA);

  






}