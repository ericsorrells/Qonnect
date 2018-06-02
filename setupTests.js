import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

// const sessionStorageMock = {
//   qProfile: "my profile",
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn()
// };

// global.sessionStorage = sessionStorageMock;
// global.sessionStorage.setItem('qProfile', {test: 'abc123'});



// export class StorageMock {
//   constructor(){
//     this.store = {};
//   }

//   clear() {
//     this.store = {};
//   }

//   getItem(key) {
//     return this.store[key] || null;
//   }

//   setItem(key, value) {
//     this.store[key] = value;
//   }

//   removeItem(key) {
//     delete this.store[key];
//   }
// }
  // qProfile: "my profile",
  // qProfile: {
  //   acceptedEvents:{ },
  //   birthDate:"1976-11-04",
  //   city:"The Sprawl!!!",
  //   createdAt:1526041717660,
  //   description:"I am a replicant! I think. I know...!",
  //   firstName:"Jon",
  //   lastName:"Doe",
  //   photoURL:"https://ih0.redbubble.net/image.14393202.3421/flat,800x800,070,f.u1.jpg",
  //   state:"Ga",
  //   updatedAt:1527427279191,
  //   userEvents:{ }
  // },
// };
