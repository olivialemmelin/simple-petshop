namespace App {
    export class PetService {
        static $inject = ['http'];

        private httpService;


        cunstructor ($http: angular.IHttpService) {
            this.httpService = $http;
        }

//         public getPetList () {
//             let promise = this.httpService ({
//                 url: '/pets',
//                 method: 'GET',
//             });
//
//             return promise;
//         }
//
//         public getPets (id) {
//             let promise = this.httpService ({
//                 url:'/posts',
//                 method: 'GET',
//                 params: {
//                     id: id
//                 }
//             })
//         }
//
//         public getPetsById (id) {
//             let promise = this.httpService ({
//                 url: '/pets',
//                 method: 'GET',
//                 params: {
//                     id: id
//                 }
//             })
//         }
//
//         public save (post) {
//             let promise = this.httpService ({
//                 url: '/pets',
//                 method: 'POST',
//                 data: post
//             });
//
//             return promise;
//         }
//
//         public deletePet (id) {
//             let promise = this.httpService ({
//                 url: '/pets/' + id,
//                 method :'DELETE'
//             })
//         }
//
//         public update (id, pet) {
//             let promise = this.httpService ({
//                 url:'/pets/',
//                 method: 'PUT',
//                 data: pet
//             });
//
//             return promise;
//         }
//     }
//
//         let app = angular.module ('App');
//         app.service ('PetService', PetService);
    }
}
