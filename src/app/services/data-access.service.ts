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

  addAllListings(listing){
    return this.afs.collection<any>(`allListings`).add(listing);
  }

  getAllListings(){
    return this.afs.collection<any>(`allListings`).valueChanges();
  }

  getProfileData(userId){
    return this.afs.doc<any>(`users/${userId}`).valueChanges();
  }

  updatefirstName(userId, firstname){
    this.afs.doc(`users/${userId}`).update({firstname: firstname});
  }

  updateLastName(userId, lastname){
    this.afs.doc(`users/${userId}`).update({lastname: lastname});
  }

  updatePhone(userId, phone){
    this.afs.doc(`users/${userId}`).update({phone: phone});
  }

}
