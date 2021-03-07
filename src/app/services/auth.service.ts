import { User } from './../_models/user.model';
import { Observable, observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import auth from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { SignupComponent } from '../authentication/signup/signup.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  const auth = userAuth;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

  }

  CreateNewUser(signUpForm: any) {
    return this.afAuth.createUserWithEmailAndPassword(signUpForm.email, signUpForm.password).then((result) => {
    }).catch((error) => {
      window.alert(error.message);
    });
  }
  signIn(signInForm) {
    return this.afAuth.signInWithEmailAndPassword(signInForm.email, signInForm.password).then((result) => {
      this.router.navigate(['/user-profile']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }
  SignInWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result)=> {
      this.SetUserData(result.user);
      this.router.navigate(['/user-profile']);
    }).catch ((error) => {
      window.alert(error.message);
    });
  }
  SetUserData(user, userName? {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${User.uid}`);
const userData: User = {
  id: User.uid,
  email: User.email,
  userName: UserName || User.displayName,
};
return UserProfileComponent.det(userData, {
  merge: true
});
  
  }



