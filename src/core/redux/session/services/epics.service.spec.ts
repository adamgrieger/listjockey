// import { ActionsObservable } from 'redux-observable';
// import { Observable } from 'rxjs/Observable';

// import * as data from '../../test/example-data';
// import * as actions from './actions';
// import * as epics from './epics';

// describe('updateUserEpic', () => {

//   test('dispatches an update user success action', (done) => {

//     const action$ = ActionsObservable.of(actions.updateUser(data.accessToken));
//     const expected = actions.updateUserSuccess(data.userObjectPrivate);

//     const dependencies = {
//       getMe: () => Observable.of(data.userObjectPrivate)
//     };

//     epics.updateUserEpic(action$, null, dependencies).subscribe(action => {
//       expect(action).toEqual(expected);
//       done();
//     });
//   });

//   test('dispatches an update user failure action', (done) => {

//     const action$ = ActionsObservable.of(actions.updateUser(data.accessToken));
//     const err = new Error(data.error);
//     const expected = actions.updateUserFailure(err);

//     const dependencies = {
//       getMe: () => Observable.throw(err)
//     };

//     epics.updateUserEpic(action$, null, dependencies).subscribe(action => {
//       expect(action).toEqual(err);
//       done();
//     });
//   });
// });
