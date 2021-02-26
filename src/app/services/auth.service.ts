import { User } from './../_models/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth, private afs: AngularFirestore
  ) { }

  CreateNewUser(signUpForm: any) {
    return this.afAuth.createUserWithEmailAndPassword(signUpForm.email, signUpForm.password).then((result) => {
      this.SetUserData(result.user, signUpForm.userName);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  SetUserData(user: any, userName: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc('user/${user.uid}');
    const userData: User = {
      id: user.uid,
      email: user.email,
      userName: userName,
    } as User;
    return userRef.set(userData, {
      merge: true
    });

  }

}