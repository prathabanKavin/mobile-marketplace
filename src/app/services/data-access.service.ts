import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take, mergeAll, zipAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private afs:AngularFirestore) { }

  addListing(userId, listing) {
   
     return this.afs.collection<any>(`userListings/${userId}/listings`).add(listing);
     
  }

  getListings(userId){
    return this.afs.collection<any>(`userListings/${userId}/listings`).valueChanges();
   
  }
  
}
